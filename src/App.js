import { Component } from './core/core.js'

export default class App extends Component {
  constructor() {
    super({
      state: {
        fruits: [
          { name: 'Apple', prince: 1000, },
          { name: 'Bnanana', prince: 2000, },
          { name: 'Cherry', prince: 3000, },
        ]
      }
    })
  }
  render() {
    console.log(this.state.fruits)

    this.el.innerHTML = `
      <h1>Fruits</h1>
      <ul>
        ${this.state.fruits
        .filter(fruit => fruit.prince < 3000)
        .map(fruit => `<li>${fruit.name}</li>`)
        .join('')}
      </ul>
    `
  }
}
