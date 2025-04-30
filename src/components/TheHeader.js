import { Component } from "../core/Core";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988'
          },
          {
            name: 'About',
            href: '#/about'
          },
        ]
      }
    })
    // 페이지가 바뀔 때마다 재 렌더
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a 
        href="#/" 
        class="logo"">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {             // menus라는 배열 데이터를 반복
            const href = menu.href.split('?')[0]       // menu.href의 ?표 앞쪽만 구하기 (query를 제외하는 과정)
            const hash = location.hash.split('?')[0]   // location.hash의 ?표 앞쪽만 구하기 (query를 제외하는 과정)
            const isActive = href === hash             // menu.href와 location.hash이 같다면 isActive true 하여 네비게이션의 'Active' 상태 활성화
            return /* html */ `
              <li>
                <a 
                  class = "${isActive ? 'active' : ''}" 
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="avatar.png" alt="User">
      </a>
    `
  }
}
