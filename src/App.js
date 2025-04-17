import { Component } from './core/Core.js'
import FruitItem from './components/FruitItem.js'

export default class App extends Component {
  constructor() {
    super({
      state: {
        fruits: [
          { name: 'Apple', price: 1000, },
          { name: 'Bnanana', price: 2000, },
          { name: 'Cherry', price: 3000, },
        ]
      }
    })
  }
  render() {
    //console.log(this.state.fruits)

    this.el.innerHTML = `
      <h1>Fruits</h1>
      <ul></ul>
    `
    const ulEl = this.el.querySelector('ul')
    ulEl.append(...this.state.fruits         // this.state.fruits는 배열
      .map(fruit => new FruitItem({          // 인자로 들어가는 객체는 payload
        props: {                             // payload.props로 각각의 fruit 데이터를 전달해줌.
          name: fruit.name,                  // payload.props.name
          price: fruit.price                 // payload.props.price
        }
      }).el)                                 // fruits[i].el = <li>fruit.name</li>
    )
  }
}
