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
class Animal {
  constructor(parentName) {
    this.name = parentName;
  }
}

class Dog extends Animal {
  constructor(childName, breed) {
    super(childName);         // 부모 생성자 호출  super(childName) === constructor(parentName)
                              // this.name = childName
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. (${this.breed})`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();

```


### this의 의미는?
- this는 **현재 클래스 인스턴스(객체)**를 가리킴.
- 쉽게 말해서, 클래스에서 this는 __“지금 만들고 있는 그 컴포넌트”__ 자체를 의미함.


### join()
- 배열을 문자열로 출력하고 싶을 때  -> '배열자료형'을 '문자열자료형'으로 변환
- [1,2,3].join(',') => '1,2,3'
```js
  ${this.state.fruits.map(fruit => ` <li>${fruit.name}</li> `).join('')}
```


### filter(callback)
- callback 조건에 true를 반환하는 결과값만 배열에 포함함.
- [1,2,3].filter(num => num > 2) => [3]
```js
  <ul>
    ${this.state.fruits.filter(fruit => fruit.prince < 3000).map(fruit => ` <li>${fruit.name}</li> `).join('')}
  </ul>
```

### find()
- find() 함수는 JavaScript에서 배열(Array)에 사용되는 메서드로, 주어진 조건을 만족하는 첫 번째 요소를 반환. 
- 만약 조건을 만족하는 요소가 없으면 undefined를 반환.
```js
  array.find(callback(element[, index[, array]])[, thisArg])
```

### filter()와 find() 차이
- 반환값    : find() : 첫 번째로 조건을 만족하는 요소 하나, filter() : 모든 조건을 만족하는 요소들의 배열
- 조건      : find() : 조건에 맞는 1개, filter() : 조건에 맞는 배열
- 결과 타입 : find() : 요소(oject, number 등), filter() : 배열
- 조건 만족 : find() : 하나만 찾으면 끝,  filter() : 끝까지 다 검사해서 다 찾음
- 반환 없음 : find() : undefined, filter() : [](빈 배열)


### ...   전개연산자
- join()과 다른점은 join() 문자열로 만들어버림
- ... 전개연산자는 전개해서(풀어서) 자료형은 유지함.
- 배열에 쓰면 대괄호만 날려버릴 수 있다.
```js
  console.log(...['a', 'b'])   // a b
  ['a', 'b'].join('')          // 'ab'
```


### append()
- El.append(...)는 DOM 요소에 '자식 노드'를 추가하는 메서드.
- append(...) -> 여러 요소나 문자열을 한 번에 추가 가능
- appendChild(...) ->  오직 하나의 노드만 추가 가능


### window.addEventListener('popstate', () => {})
- popstate 이벤트는 브라우저의 세션 기록(stack) 이 변경될 때 발생하는 이벤트. 
- 특히, 사용자가 뒤로 가기(back) 또는 앞으로 가기(forward) 버튼을 눌렀을 때 트리거됨.


