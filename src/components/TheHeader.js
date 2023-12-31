import { Component } from "../core/core";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt15789038",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => this.render());
  }
  render() {
    this.el.innerHTML = /* html */ `
    <a href="#/"class="logo"><span>MOVIE.</span>COM</a>
    <nav>
      <ul>
        ${this.state.menus
          .map((menu) => {
            const href = menu.href.split("?")[0]; //data에 등록된 hash
            const hash = location.hash.split("?")[0]; //nav선택시 바뀔 hash
            const isActive = href === hash;
            return /*html*/ `
          <li><a class="${isActive ? "active" : ""}" href=${menu.href}>${
              menu.name
            }</a></li>
          `;
          })
          .join("")}
      </ul>
    </nav>
    <a href="#/about"><img class="user" src='https://i.ibb.co/1rCtvLj/profile.png'></a> 
    `;
  }
}
