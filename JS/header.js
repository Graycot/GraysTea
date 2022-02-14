class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="header-element">
      <nav class="desktop-menu">
          <a class="nav-button-1 nav-button" href="/index.html">Home</a>
          <a class="nav-button-2 nav-button" href="/content/grays-tea/join-cozy-ring.html" >Join Cozy Ring</a>
          <a class="nav-button-3 nav-button" href="/content/grays-tea/entertainment.html">Entertainment</a>
          <a class="nav-button-4 nav-button" href="/content/grays-tea/cool-online-places.html">Cool Online Places</a>
          <a class="nav-button-5 nav-button" href="/content/grays-tea/educational-resources.html">Educational Resources</a>
          <a class="nav-button-6 nav-button" href="/content/grays-tea/useful-tools.html" >Useful Tools</a>
          <a class="nav-button-7 nav-button" href="/content/grays-tea/my-projects.html">My Projects</a>
          <a class="nav-button-8 nav-button" href="/content/grays-tea/about.html">About</a>
          <a class="nav-button-9 nav-button" href="/content/grays-tea/contact.html">Contact</a>
          <a class="nav-button-10 nav-button" href="/testing-zone.html">Testing Zone</a>
          <a class="nav-button-11 nav-button" href="/content/grays-tea/buttons-and-gifs.html">Buttons And Gifs</a>
      </nav>
    </header>

    `;
  }
}

customElements.define('header-component', Header);

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}