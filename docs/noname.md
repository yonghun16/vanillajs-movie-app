## 코드 메모

### 인스턴스 생성
```js
root.append(new App().el)
```
- root의 자료형은 const root: HTMLElement | null 으로 추론됨.
- “새로운 App 인스턴스를 만들고, 그 안에 있는 .el이라는 엘리먼트를 root DOM 요소에 붙여라”
- new App()
  - App이라는 클래스를 인스턴스화함. 즉, 새로운 컴포넌트를 만든다고 보면 돼.
- .el
  - App 클래스 안에 있는 HTML 요소 (예: div, ul, 등)를 뜻해. 보통 Vue 스타일이나 커스텀 프레임워크에서 this.el로 DOM을 직접 다루는 패턴에서 나옴.
- root.append(...)
  - root는 DOM 요소(document.getElementById('app')) append()는 그 안에 새로운 자식 요소를 추가하는 DOM API


### super()
- super()는 JavaScript에서 부모 클래스의 생성자(constructor)를 호출하는 함수
- 왜 super()가 필요한가? : 자바스크립트에서 클래스를 상속받은 경우, 자식 클래스의 생성자에서 super()를 호출하지 않으면 this를 사용할 수 없음. 즉, super()는 this를 초기화할 수 있도록 도와주는 역할도 함.
```js
export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    this.el.textContent = 'Hello World'
  }
}
```


### this의 의미는?
- this는 **현재 클래스 인스턴스(객체)**를 가리킴.
- 쉽게 말해서, 클래스에서 this는 __“지금 만들고 있는 그 컴포넌트”__ 자체를 의미함.
