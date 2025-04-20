# 라우팅


### 1. 라우터란? 
- 사용자가 방문한 URL 경로(path) 에 따라 어떤 화면(Component) 을 보여줄지 결정해주는 길잡이 역할을 함.
```
/              → 홈 페이지
/about         → 회사 소개 페이지
/products/123  → 상품 상세 페이지

```

### 2. 라우터의 역할
- URL 감지         : 사용자가 /about으로 이동하면, 그걸 감지함
- 컴포넌트 렌더링  : /about일 때는 AboutPage 컴포넌트를 보여줌
- 히스토리 관리    : pushState, popstate 등을 활용해서 히스토리를 조작
- 새로고침 없이 화면 전환 : 전체 페이지 새로고침 없이 뷰만 바꾸는 게 핵심!


### 3. 라우터 구현
#### 1. core/Router
```js
///// Router /////
function routeRender(routes) {          // routes -> [{path, component}, {path, component}, ...]
  if (!location.hash) {                 // location.hash가 없다면 즉 '/' 경로이면
    history.pushState(null, '', '#/')   // #/로 이동
  }

  const routerView = document.querySelector('router-view')
  const [hash, queryString = ''] = location.hash.split('?')    // #/about?name=song 에서 ? 기준으로 앞쪽은 hash, 뒷쪽은 query

  const query = queryString                 // queryString -> a=123&b=456
    .split('&')                             //               ['a=123', 'b=456']
    .reduce((acc, cur) => {                 //               {a: '123', b: '456'} -> query
      const [key, value] = cur.split('=')
      acc[key] = value
      return acc
    }, {})
  history.replaceState(query, '')     // history.replaceState({a: '123', b: '456'}, '')


  const currentRoute = routes.find(route => new RegExp(`^${route.path}/?$`).test(hash))   // 현재 주소 해시와 일치하는 route를 찾는 코드
  routerView.innerHTML = ''                                                               // 라우터 뷰 영역을 먼저 비워줌
  routerView.append(new currentRoute.component().el)                                      // 새로운 컴포넌트의 .el DOM 요소를 routerView에 추가함
}
export function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => {    // 브라우져의 세션 기록이 변경되면
      routeRender(routes)                          // 렌더링함.
    })
    routeRender(routes)                            // 처음에 1회 실행
  }
}
```

#### 2. router/index.js
```js
import { createRouter } from '../core/Core'
import Home from './Home'                           // Home  컴포넌트(Home의 페이지 모양, 구조, 내용 정의)
import About from './About'                         // About 컴포넌트(About의 페이지 모양, 구조, 내용 정의)

export default createRouter([
  { path: '#/', component: Home },                  // Home 라우터를 '#/' path에 등록
  { path: '#/about', component: About },            // About 라우터를 '#/about' path에  등록
]) 
```

### 4. 정규식으로 라우트 찾기
```js
const route = '/about';
const hash = '/about/';

const regex = new RegExp(`^${route}/?$`);   // ^/about/?$
console.log(regex.test(hash));   // true
```


