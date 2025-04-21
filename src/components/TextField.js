import { Component } from '../core/Core'
import messageStore from '../store/message'

export default class TextField extends Component {
  render() {
    this.el.innerHTML = `
      <input value="${messageStore.state.message}" />
    `
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', (e) => {
      console.log(inputEl.value)
    })
  }
}
