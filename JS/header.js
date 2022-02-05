class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="header-element">
      <nav class="desktop-menu">
          <a class="WIP nav-button-1 nav-button" href="/index.html">Home</a>
          <a class="WIP nav-button-2 nav-button" href="/index.html">Cool Online Places</a>
          <a class="WIP nav-button-3 nav-button" href="/content/grays-tea/about.html" >Join Cozy Ring</a>
          <a class="WIP nav-button-4 nav-button" href="/content/grays-tea/CozyRing/CozyRing.html">Educational Resources</a>
          <a class="WIP nav-button-5 nav-button" href="#">Web Dev Guide</a>
          <a class="WIP nav-button-6 nav-button" href="#" >Useful Tools</a>
          <a class="WIP nav-button-7 nav-button" href="#">Personal Interests</a>
          <a class="WIP nav-button-8 nav-button" href="/content/grays-tea/about.html">About</a>
          <a class="WIP nav-button-9 nav-button" href="/content/grays-tea/contact.html">Contact</a>
      </nav>
    </header>

    `;
  }
}

customElements.define('header-component', Header);

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}