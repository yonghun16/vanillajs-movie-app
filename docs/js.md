# JS 함수

### setAttribute()
- setAttribute()는 HTML 요소에 속성(attribute)을 추가하거나 수정하는 메서드

### 백틱(`) 안에 또 백틱(`)을 쓸 수 있을까?
- 노, 직접적으로 백틱 안에 백틱은 사용 할 수 없다.
- 그러나, 백틱 안에서 ${}안에 '다시 문자열을 만들 때' 백틱을 별도로 쓸 수 있다.
```plain
전체 템플릿 리터럴 (백틱 ``)
 └─ 안에서 ${ ... 조건문 }
       └─ 그 안에서도 HTML 문자열 만들기
            └─ 여러 줄이면 백틱(``) / 한 줄이면 작은따옴표('') 가능
```

## 스켈레톤 UI
- **스켈레톤 UI(Skeleton UI)**는 웹이나 앱에서 데이터가 로딩되기 전 사용자에게 빈 공간 대신 “틀”을 미리 보여주는 UI 기법입니다.
- 로딩 중임을 시각적으로 알려주면서 사용자가 기다리는 동안 불안하거나 혼란스럽지 않게 도와주는 역할을 해요.
