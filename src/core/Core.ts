///// Component /////
interface ComponentPayload {
  tagName?: string
  props?: {
    [key: string]: unknown
  }
  state?: {
    [key: string]: unknown
  }
}
export class Component {
  public el
  public state
  public props
  constructor(payload: ComponentPayload = {}) {
    const {
      tagName = 'div',
      state = {},
      props = {},
    } = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.props = props
    this.render()
  }
  render() {
    // ...
  }
}



///// Router /////
/* router 렌더링 */
interface Route {
  path: string
  component: typeof Component
}

type Routes = Route[]

// 페이지 랜더링
function routeRender(routes: Routes) {   // routes -> [{path, component}, {path, component}, ...]
  /* '/' 이동 */
  if (!location.hash) {
    history.pushState(null, '', '#/')
  }

  const routerView = document.querySelector('router-view')
  const [hash, queryString = ''] = location.hash.split('?')       // #/about?name=song 에서 ? 기준으로 앞쪽은 hash, 뒷쪽은 query

  /* query를 state로 변환 */
  interface Query {
    [key: string]: string
  }

  const query = queryString
    .split('&')
    .reduce((acc, cur) => {
      const [key, value] = cur.split('=')
      acc[key] = value
      return acc
    }, {} as Query)
  history.replaceState(query, '')

  /* route 렌더링 */
  const currentRoute = routes.find(route => new RegExp(`^${route.path}/?$`).test(hash))
  if (routerView) {
    routerView.innerHTML = ''
    currentRoute && routerView.append(new currentRoute.component().el)
  }

  /* 페이지 변환 시 스크롤 최상단 이동 */
  window.scrollTo(0, 0)
}

/* Router 생성 */
export function createRouter(routes: Routes) {  // routes -> [{path, component}, {path, component}, ...]
  return function() {
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}



///// Store /////
interface StoreObserver {
  [key: string]: SubscribeCallback[]
}
interface SubscribeCallback {
  (arg: unknown): void
}
export class Store<S> {                       //타입 스크립트에 함수나 클래스에서 매번 다른 타입을 받아서 적용 할 때 제네릭 방식을 사용함.
  public state = {} as S                      // 상태(데이터)
  private observers = {} as StoreObserver     // 구독자들(감시자들)
  constructor(state: S) {

    for (const key in state) {
      // 각 상태에 대한 변경 감시(Seeter) 설정!
      Object.defineProperty(this.state, key, {
        get: () => state[key],                // state['message']
        set: (val) => {
          state[key] = val
          if (Array.isArray(this.observers[key])) {  // 호출할 콜백이 있는 경우!
            this.observers[key].forEach(observer => observer(val))
          }
        }
      })
    }
  }

  // state가 어떻게 변하는지 구독(subscribe)을 통해서 감시하겠다.
  subscribe(key: string, cb: SubscribeCallback) {
    // {message: [cb1, cb2, cb3, ...]}
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : this.observers[key] = [cb]
  }
}

