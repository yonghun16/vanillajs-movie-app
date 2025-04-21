import { Component } from './core/Core.js'
import TheHeader from './components/TheHeader.js'

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view')
    this.el.append(
      new TheHeader().el,
      routerView
    )
  }
}
