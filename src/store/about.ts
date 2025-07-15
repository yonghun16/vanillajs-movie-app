import { Store } from '../core/Core'

interface State {
  photo: string
  name: string
  email: string
  github: string
  repository: string
  blog: string
}

export default new Store<State>({
  photo: 'avatar.png',
  name: 'yonghun16',
  email: 'yonghun16@naver.com',
  github: 'https://github.com/yonghun16',
  repository: 'https://github.com/yonghun16/vanillajs-movie-app',
  blog: 'https://blog.naver.com/frontend16',
})
