import { Component } from "../core/Core";

export default class Home extends Component {
  render() {
    this.el.innerHTML = '<h1>Hello world</h1>'
  }
}
