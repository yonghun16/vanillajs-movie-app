import { Store } from '../core/Core'

export interface SimpleMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface  DetailedMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}


interface State {
  searchText: string
  page: number
  pageMax: number
  movies: SimpleMovie[]
  movie: DetailedMovie
  loading: boolean
  message: string
}

const store = new Store<State>({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {} as DetailedMovie,
  loading: false,
  message: 'Search for the movie title!',
})

export default store

/* 영화 리스트 가져오기 */
export const searchMovies = async (page: number) => {
  store.state.loading = true
  store.state.page = page       // store.state.page를 현재 페이지로 바꾸기
  if (page === 1) {             // 1번째 페이지이면
    store.state.movies = []     // 영화 리스트 제거
    store.state.message = ''
  }

  // 네트워크 요청(fetch)은 실패할 수 있으므로, try-catch-finally를 써서
  // 에러를 안전하게 잡고, 로딩 상태를 정확히 관리함.
  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: store.state.searchText,
        page
      })
    })
    const { Search, totalResults, Response, Error } = await res.json()
    if (Response === 'True' && Array.isArray(Search)) {      // 반응이 True이면 "검색 결과가 있다면"
      store.state.movies = [
        ...store.state.movies,      // 기존의 영화 리스트 +   (ex. 1~2 page)
        ...Search                   // 검색 결과 영화 리스트  (ex. 3page)
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)   // (최종 검색 결과 / 10) ->  마지막 페이지
    } else {                        // 검색 결과가 없다면
      store.state.message = Error;
    }
  } catch (error) {
    console.log('searchMovies error', error)
  } finally {
    store.state.loading = false
  }
}

/* 영화 상세정보 가져오기 */
export const getMovieDetails = async (id: string) => {
  try {
    // const res = await fetch(`https://omdbapi.com/?apikey=981672ca&i=${id}&plot=full`);
    const res = await fetch('/api/movie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error: ', error)
  }
}
