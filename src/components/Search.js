// Search 컴포넌트 
import { Component } from '../core/Core.js'

export default class Search extends Component {
  render() {
    this.el.classList.add('search') 
    this.el.innerHTML = `
      <input type="text" placeholder="Enter the movie title to Search" />
      <button class="btn btn-primary">
        Search!
      </button>
    `

    /* input 요소 */
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      //
    })
    inputEl.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        //
      }
    })

    /* button 요소 */
    const btnEl = this.el.querySelector('.btn')
    btnEl.addEventListener('click', () => {
      //
    })
  }
}
