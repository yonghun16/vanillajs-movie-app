// Search 컴포넌트 
import { Component } from '../core/Core'
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = `
      <input type="text" value= "${movieStore.state.searchText}" placeholder="Enter the movie title to Search" />
      <button class="btn btn-primary">
        Search!
      </button>
    `

    /* input 요소 */
    const inputEl = this.el.querySelector('input')
    inputEl?.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl?.addEventListener('keydown', event => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })

    /* button 요소 */
    const btnEl = this.el.querySelector('.btn')
    btnEl?.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}
