import { Component } from '../core/Core'
import TextField from '../components/TextField'

export default class Home extends Component {
  render() {
    this.el.innerHTML = `
      <h1>Home Page!</h1>
    `
    this.el.append(new TextField().el)
  }
}
