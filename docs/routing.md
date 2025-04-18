## 라우팅


### 라우터란? 
- 사용자가 방문한 URL 경로(path) 에 따라 어떤 화면(Component) 을 보여줄지 결정해주는 길잡이 역할을 함.
```
/              → 홈 페이지
/about         → 회사 소개 페이지
/products/123  → 상품 상세 페이지

```

### 라우터의 역할
- URL 감지         : 사용자가 /about으로 이동하면, 그걸 감지함
- 컴포넌트 렌더링  : /about일 때는 AboutPage 컴포넌트를 보여줌
- 히스토리 관리    : pushState, popstate 등을 활용해서 히스토리를 조작
- 새로고침 없이 화면 전환 : 전체 페이지 새로고침 없이 뷰만 바꾸는 게 핵심!


### 라우터 구현
#### 1. core/Router
```js
///// Router /////
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
import Home from './Home'                           // Home  컴포넌트(페이지)
import About from './About'                         // About 컴포넌트(경로, 페이지)

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/about', component: About },
]) 
```

### 정규식으로 라우트 찾기
```js
const route = '/about';
const hash = '/about/';

const regex = new RegExp(`^${route}/?$`);   // ^/about/?$
console.log(regex.test(hash));   // true
```

### 리터럴 방식 VS 생성자 방식
- /abc\// : 리터럴에서는 /가 정규식의 경계라서 문자 /를 쓰려면 \/로 escape
- new RegExp('abc/') : 생성자에서는 그냥 문자열이니깐 /를 escape 할 필요가 없음.
