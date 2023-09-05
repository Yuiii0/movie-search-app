import { Component } from "../core/core";

export default class Headline extends Component {
  render() {
    this.el.classList.add("headline");
    this.el.innerHTML = /* html */ `
    <h1><span>MOVIE</span> SEARCH</h1>
    <p>OMbi API를 사용하여 만든 Movie Search App 입니다.<br>
       궁금한 영화 정보를 검색해보세요!<br>
       포스터와 줄거리 정보까지 알아볼 수 있답니다 🙂<br>
       <!-- The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.<br>
       If you find this service useful, please consider making a one-time donation or become a patron. -->
    </p>
    `;
  }
}
