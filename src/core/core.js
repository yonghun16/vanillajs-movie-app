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
function routeRender(routes) {   // routes -> [{path, component}, {path, component}, ...]
  if(!location.hash) {
    history.pushState(null, '', '#/')
  }

  const routerView = document.querySelector('router-view')
  // http://localhost:8080/#/about?name=song
  // #/about?name=song
  const [hash, queryString = ''] = location.hash.split('?')       // #/about?name=song 에서 ? 기준으로 앞쪽은 hash, 뒷쪽은 query

  // a=123&b=456
  // ['a=123', 'b=456']
  // {a: '123', b: '456'}
  const query = queryString.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    acc[key] = value
    return acc
  }, {})

  const currentRoute = routes.find(route => new RegExp(`^${route.path}/?$`).test(hash) )
  routerView.innerHTML = ''
  routerView.append(new currentRoute.component().el)
}

export function createRouter(routes) {  // routes -> [{path, component}, {path, component}, ...]
  return function () {
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}
