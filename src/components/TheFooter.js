import { Component } from "../core/Core";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/yonghun16/vanillajs-movie-app">Github Repository</a>
      </div>
      <div>
        <a href="https://github.com/yonghun16">
          ${new Date().getFullYear()} &copy; yonghun16
        </a>
      </div>
    `
  }
}
