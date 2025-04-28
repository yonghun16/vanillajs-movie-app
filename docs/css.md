# CSS Code 설명

### flex-grow
- 이 경우 .item2는 .item1보다 2배 넓게 늘어납니다.
```css
.container {
  display: flex;
}

.item1 {
  flex-grow: 1;
}

.item2 {
  flex-grow: 2;
}
```

### 가상 요소 선택자 ::
- ::after는 가상 요소를 만들어서 추가적인 스타일을 적용할 때 사용. 
- 텍스트나 아이콘, 배경 등을 추가하는 경우, 마크업을 변경하지 않고 CSS만으로 효과적으로 처리할 수 있기 때문에 필수적인 경우가 많습니다. 
- 반면, 단순한 스타일 변경만 원한다면 hover나 다른 스타일을 사용하면 됩니다.
- hover만 사용하면 기본적으로 스타일을 변경하는데, 요소 내에 실제로 무엇을 추가하거나 변형하지는 않음.
- 예를 들어, hover를 사용하여 border 스타일을 적용할 수 있지만, ::after를 사용하면 요소 내부에 추가적인 가상 요소를 생성할 수 있음.
```css
/* 아이콘 추가 */
button::after {
  content: '\f007';  /* Font Awesome 아이콘 예시 */
  font-family: 'FontAwesome';
  margin-left: 8px;
}
```
```css
/* 이미지나 도형 추가*/
.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('path/to/your/image.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.3;
}
```
```css
/* 특정 디자인 효과 */
h2::after {
  content: " 🔥";
  font-size: 1.5rem;
  color: red;
}
```
