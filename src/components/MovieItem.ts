import { Component } from '../core/Core'
import { SimpleMovie } from '../store/movie'   // 타입 가져오기

interface Props {
  [key: string]: unknown
  movie: SimpleMovie
}

export default class MovieItem extends Component {
  public props!: Props
  constructor(props: Props) {
    super({
      props,
      tagName: 'a'
    })
  }
  render() {
    const { movie } = this.props

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    this.el.style.backgroundImage = `url(${movie.Poster})`
    this.el.innerHTML = `
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>
    `
  }
}
