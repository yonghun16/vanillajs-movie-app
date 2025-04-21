# 컴포넌트

## 구조
### 1. Class 구조
```Text
- core
  - App
  - FruitItem
```

### 2. Component 구조
```Text
- main
  - App
    - FruitItem
```


### 3. Component Class (root Component)

```js
///// Component /////
export class Component {                          // Component를 export
  constructor(payload = {}) {                     // 만약 new Component() 할 때 payload를 안 넘기면, 자동으로 payload는 빈 객체 {}가 됨.
    const { 
      tagName = 'div', 
      state = {},
      props = {},
    } = payload                                   // 전달받은 payload 객체를 구조분해 할당해서 위 속성을 꺼냄.
    this.el = document.createElement(tagName)     // 이 컴포넌트가 실제로 화면에 렌더링될 HTML 요소를 생성.
                                                  // 이걸 this.el에 저장해서 컴포넌트의 루트 요소로 사용.
    this.state = state  // 컴포넌트의 내부 상태를 저장해. (예: 버튼 클릭 횟수, 사용자 입력값 등 컴포넌트 안에서 관리하는 데이터.)
    this.props = props  // props는 외부(부모)로부터 전달된 정보. 컴포넌트가 자신을 둘러싼 환경에서 어떤 설정을 받았는지 나타냄.
    this.render()       // 컴포넌트를 만들자마자 **화면에 그리기(render)**를 바로 실행.
  }
  render() {  //  이건 render() 메서드를 정의만 해둔 상태. 자식 클래스에서 Component를 상속받고 나서 이 render()를 오버라이딩(재정의) 해서 원하는 UI를 구현하게 됨.
    // ...
  }
}
```


#### 1. 컴포넌트 정의
- 컴포넌트란   : UI의 특정 조각(부분)을 캡슐화한 독립적인 코드 블록으로, 구조(HTML), 스타일(CSS), 동작(JS)를 함께 정의한 것.
- 재사용성     : 같은 UI를 여러 곳에서 다시 쓸 수 있음
- 유지보수성   : 코드가 잘 나뉘어져 있으면 수정하기 쉬움
- 분리와 독립성: 하나의 기능/UI 단위를 잘 분리해두면 독립적으로 개발 가능

#### 2. 순수 JS 컴포넌트 (직접 만든 경우)
```javascript
export default class Button {
  constructor(label) {
    this.el = document.createElement('button')  // Button 컴포넌트는 버튼을 만들고
    this.el.textContent = label                 // 텍스트(label)를 받아서 넣고
    this.el.className = 'my-button'             // 클래스를 지정해서 스타일도 적용 가능
  }
}
```

#### 3. React 같은 프레임워크의 컴포넌트
```jsx
function Button({ label }) {
  return <button className="my-button">{label}</button>
}
```


## Props와 state
#### 1. props의 개념 요약
- 데이터 전달 수단: 부모 → 자식
- 읽기 전용 (immutable): 자식 컴포넌트는 받은 props를 직접 수정할 수 없음
- 컴포넌트 재사용성 향상: 같은 컴포넌트를 다양한 데이터로 재사용 가능

#### 2.state의 개념 요약
- **state는 컴포넌트 내부에서 관리되는 동적인 데이터(상태)**를 의미.
- 컴포넌트 내부에서 선언 및 관리됨
- 변경될 수 있는(mutable) 값
- 변경되면 자동으로 리렌더링 발생
- 주로 사용자 입력, 네트워크 응답 등으로 값이 바뀜
