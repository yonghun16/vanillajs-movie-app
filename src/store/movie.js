import { Store } from '../core/Core'

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
})

export default store
export const searchMovies = async page => {
  store.state.page = page       // store.state.page를 현재 페이지로 바꾸기

  if (page === 1) {             // 1번째 페이지이면
    store.state.movies = []     // 영화 리스트 제거
  }

  // 영화 정보 가져오기
  const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=981672ca&s=${store.state.searchText}&page=${page}`)     // API Usage : https://www.omdbapi.com/?apikey=[yourkey]&
  const { Search, totalResults } = await res.json()
  store.state.movies = [
    ...store.state.movies,      // 기존의 영화 리스트 +   (ex. 1~2 page)
    ...Search                   // 검색 결과 영화 리스트  (ex. 3page)
  ]
  store.state.pageMax = Math.ceil(Number(totalResults) / 10)   // (최종 검색 결과 / 10) ->  마지막 페이지
}
