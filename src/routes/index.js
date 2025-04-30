import { createRouter } from '../core/Core.js'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound },     // 위 3개 페이지 외 모든 페이지는 404(NotFound) 처리
])
