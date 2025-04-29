import { Component } from '../core/Core'
import movieStore, { getMovieDetails } from '../store/movie'

export default class Movie extends Component {
  async render() {   // 영화 상세정보 렌더
    await getMovieDetails(history.state.id)
    // console.log(movieStore.state.movie)
    const { movie } = movieStore.state
    const bigPoster = movie.Poster.replace('SX300', 'SX700')   // 포스트 사이즈 SX300 -> SX700 (고해상도로 변경)

    this.el.classList.add('container', 'the-movie')
    this.el.innerHTML = `
      <div 
        style="background-image: url(${bigPoster})" 
        class="poster"></div>
      <div class="spece">
        <div class="title">
          ${movie.Title}
        </div>
        <div class="labels">
          <span>${movie.Released}</span>
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class="plot">
          ${movie.Plot}
        </div>
        <div>
          <h3>Ratings</h3>
          ${movie.Ratings.map(rating => `
           <p>${rating.Source}: ${rating.Value}</p>
          `).join('')}
        </div>
        <div>
          <h3>Actors</h3>
          <p>${movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${movie.Genre}</p>
        </div>
      </div>
    `
  }
}
