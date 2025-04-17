import { Component } from './core/core.js'


export default class App extends Component {
  constructor() {
    super({
      state: {
        inputText: '',
      }
    })
  }
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = `
      <input />
      <button>Click</button>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      this.state.inputText = inputEl.value
    })

    const buttonEl = this.el.querySelector('button')
    buttonEl.addEventListener('click', () => {
      console.log(this.state.inputText)
    })
  }
}
