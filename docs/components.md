## 컴포넌트 구조

### "VanillaJS Movie App"의 컴포넌트 구조
```JSON
- root
  - App
```


### 컴포넌트 정의

#### 컴포넌트 정의
- 컴포넌트란   : UI의 특정 조각(부분)을 캡슐화한 독립적인 코드 블록으로, 구조(HTML), 스타일(CSS), 동작(JS)를 함께 정의한 것.
- 재사용성     : 같은 UI를 여러 곳에서 다시 쓸 수 있음
- 유지보수성   : 코드가 잘 나뉘어져 있으면 수정하기 쉬움
- 분리와 독립성: 하나의 기능/UI 단위를 잘 분리해두면 독립적으로 개발 가능

#### 1. 순수 JS 컴포넌트 (직접 만든 경우)
```javascript
export default class Button {
  constructor(label) {
    this.el = document.createElement('button')  // Button 컴포넌트는 버튼을 만들고
    this.el.textContent = label                 // 텍스트(label)를 받아서 넣고
    this.el.className = 'my-button'             // 클래스를 지정해서 스타일도 적용 가능
  }
}
```

#### 2. React 같은 프레임워크의 컴포넌트
```jsx
function Button({ label }) {
  return <button className="my-button">{label}</button>
}
```

