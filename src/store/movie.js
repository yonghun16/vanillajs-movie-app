import { Store } from '../core/Core'

const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
})

export default store
export const searchMovies = async page => {
  // API Usage : https://www.omdbapi.com/?apikey=[yourkey]&
  const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=981672ca&s=${store.state.searchText}&page=${page}`)
  const { Search } = await res.json()
  store.state.movies = [
    ...store.state.movies,
    ...Search
  ]
}
