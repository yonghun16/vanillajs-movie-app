import { Component } from '../core/Core'
import movieStore from '../store/movie'
import MovieItem from './MovieItem'

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {
      this.render()
    })
    movieStore.subscribe('loading', () => {    // loading 상태가 변경되면(loading state를 구독)
      this.render()                            // render 함수를 실행
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = `
      <div class="movies"></div>                <!-- 영화 리스트 -->
      <div class="the-loader hide"></div>       <!-- 로딩 bar -->
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )

    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading                          // loading 상태가 true이면  (로딩중)
      ? loaderEl.classList.remove('hide')             // hide를 삭제하여 보이게 함. (로딩중)
      : loaderEl.classList.add('hide')                // hide를 표시하여 보이지 않게 함. (로딩 끝)
  }
}
