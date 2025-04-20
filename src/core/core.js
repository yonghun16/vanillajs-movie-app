///// Component /////
export class Component {
  constructor(payload = {}) {
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
function routeRender(routes) {   // routes -> [{path, component}, {path, component}, ...]
  /* '/' 이동 */
  if (!location.hash) {
    history.pushState(null, '', '#/')
  }

  const routerView = document.querySelector('router-view')
  const [hash, queryString = ''] = location.hash.split('?')       // #/about?name=song 에서 ? 기준으로 앞쪽은 hash, 뒷쪽은 query

  /* query를 state로 변환 */
  const query = queryString
    .split('&')
    .reduce((acc, cur) => {
      const [key, value] = cur.split('=')
      acc[key] = value
      return acc
    }, {})
  history.replaceState(query, '')

  /* route 렌더링 */
  const currentRoute = routes.find(route => new RegExp(`^${route.path}/?$`).test(hash))
  routerView.innerHTML = ''
  routerView.append(new currentRoute.component().el)

  /* 페이지 변환 시 스크롤 최상단 이동 */
  window.scrollTo(0, 0)
}

/* Router 생성 */
export function createRouter(routes) {  // routes -> [{path, component}, {path, component}, ...]
  return function() {
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}
