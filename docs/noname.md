# 코드 메모

### 1. 인스턴스 생성 new App()
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


### 2. super()
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


### 3. this의 의미는?
- this는 **현재 클래스 인스턴스(객체)**를 가리킴.
- 쉽게 말해서, 클래스에서 this는 __“지금 만들고 있는 그 컴포넌트”__ 자체를 의미함.


### 4. join()
- 배열을 문자열로 출력하고 싶을 때  -> '배열자료형'을 '문자열자료형'으로 변환
- [1,2,3].join(',') => '1,2,3'
```js
  ${this.state.fruits.map(fruit => ` <li>${fruit.name}</li> `).join('')}
```


### 5. callbackfilter(callback)
- callback 조건에 true를 반환하는 결과값만 배열에 포함함.
- [1,2,3].filter(num => num > 2) => [3]
```js
  <ul>
    ${this.state.fruits.filter(fruit => fruit.prince < 3000).map(fruit => ` <li>${fruit.name}</li> `).join('')}
  </ul>
```

### 6. find()
- find() 함수는 JavaScript에서 배열(Array)에 사용되는 메서드로, 주어진 조건을 만족하는 첫 번째 요소를 반환. 
- 만약 조건을 만족하는 요소가 없으면 undefined를 반환.
```js
  array.find(callback(element[, index[, array]])[, thisArg])
```

### 7. filter()와 find() 차이
- 반환값    : find() : 첫 번째로 조건을 만족하는 요소 하나, filter() : 모든 조건을 만족하는 요소들의 배열
- 조건      : find() : 조건에 맞는 1개, filter() : 조건에 맞는 배열
- 결과 타입 : find() : 요소(oject, number 등), filter() : 배열
- 조건 만족 : find() : 하나만 찾으면 끝,  filter() : 끝까지 다 검사해서 다 찾음
- 반환 없음 : find() : undefined, filter() : [](빈 배열)


### 8. ... 전개연산자
- join()과 다른점은 join() 문자열로 만들어버림
- ... 전개연산자는 전개해서(풀어서) 자료형은 유지함.
- 배열에 쓰면 대괄호만 날려버릴 수 있다.
```js
  console.log(...['a', 'b'])   // a b
  ['a', 'b'].join('')          // 'ab'
```


### 9. append()
- El.append(...)는 DOM 요소에 '자식 노드'를 추가하는 메서드.
- append(...) -> 여러 요소나 문자열을 한 번에 추가 가능
- appendChild(...) ->  오직 하나의 노드만 추가 가능


### 10. window.addEventListener('popstate', () => {})
- popstate 이벤트는 브라우저의 세션 기록(stack) 이 변경될 때 발생하는 이벤트. 
- 특히, 사용자가 뒤로 가기(back) 또는 앞으로 가기(forward) 버튼을 눌렀을 때 트리거됨.


### 11. reduce()
- 배열에서 모든 요소를 '하나의 **값**'으로 축약(reduce)할 때 사용하는 유용한 함수.
- reduce()는 곧 누산기다 (누적하여 계산하는 함수)
```js
array.reduce(callback, initialValue)  // callback(acc, cur, idx, arr): 배열의 각 요소에 대해 실행할 함수
                                      // initialValue (선택): 누산기의 초기값. 없으면 배열의 첫 번째 요소가 초기값이 됨.
```
```js
// 배열의 합 구하기
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum); // 출력: 15
```
```js
// 배열을 객체로 변환
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// 출력: { apple: 2, banana: 2, orange: 1 }
```
```JavaScript
// 중첩된 배열을 하나로 평탄화
const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, cur) => acc.concat(cur), []);

console.log(flat); // 출력: [1, 2, 3, 4, 5]
```


### 12. history.pushState() VS history.replaceState()
#### pushState()
- 새로운 히스토리 항목을 추가 -> 사용자가 뒤로가기 버튼을 누르면 이전 상태로 돌아갈 수 있음.
- 이 메서드는 페이지를 새로 고치지 않고도 URL을 변경할 수 있게 해줘서, SPA(Single Page Application) 같은 앱에서 주로 사용
- 사용자가 이동한 이력을 남길 때 사용

#### replaceState()
- 현재 히스토리 항목을 대체 -> 새로운 항목을 만들지 않고 현재 페이지의 URL이나 상태만 바꿈
- 주소는 바뀌지만, 뒤로가기를 눌러도 /page2 이전 주소로는 안 돌아가짐. 왜냐면 새 히스토리 항목이 아니라 덮어쓴 거라서.
- 리다이렉트하거나 주소만 바꾸고 싶을 때 사용
```JavaScript
history.pushState(state, title, url);
history.replaceState(state, title, url);
```
- 인자 설명:
  - state: 스토리에 저장할 상태 객체 (예: { page: 1 }), 나중에 popstate 이벤트로 접근할 수 있음
  - title: 대부분 무시됨. 브라우저에서 아직 사용 안 함, 그냥 ''로 두는 경우가 많음
  - url  : 브라우저 주소창에 표시할 새 URL (도메인은 바꾸면 안 됨, 상대경로나 해시 사용)


### 13. 리터럴 방식 VS 생성자 방식
- /abc\// : 리터럴에서는 /가 정규식의 경계라서 문자 /를 쓰려면 \/로 escape
- new RegExp('abc/') : 생성자에서는 그냥 문자열이니깐 /를 escape 할 필요가 없음.


### 14. Object.defineProperty()
- Object.defineProperty() 함수는 JavaScript에서 객체의 **속성(property)**을 정교하게 정의하거나 수정할 때 사용하는 메서드.
- 일반적인 obj.key = value 방식보다 더 세부적인 설정이 가능
```JavaScript
Object.defineProperty(obj, prop, descriptor)
```
- obj: 속성을 정의할 대상 객체
- prop: 정의할 속성 이름 (문자열 또는 심볼)
- descriptor: 속성의 동작을 설명하는 객체
```JavaScript
// descriptor예시
const person = {};

Object.defineProperty(person, 'name', {
  value: 'Alice',               // 속성의 실제값
  writable: false,              // 값을 변경할 수 있는지 여부(true/false)
  enumerable: true,             // for...in 구문을 사용하여 속성을 찾을 수 있는지 여부
  configurable: false           // 속성을 정의하고 제거할 수 있는지 여부
});

console.log(person.name); // Alice

person.name = 'Bob';
console.log(person.name); // 여전히 Alice (writable: false)
```
```JavaScript
// Geeter/Setter 예시
const user = {};
let age = 30;

Object.defineProperty(user, 'age', {
  get() {
    return age;
  },
  set(value) {
    if (value >= 0) {
      age = value;
    }
  }
});

console.log(user.age); // 30
user.age = 35;
console.log(user.age); // 35
user.age = -5;         // set을 시도했으나 조건에 맞지 않아 적용되지 않음
console.log(user.age); // 여전히 35
```
