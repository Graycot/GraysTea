class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="header-element">
      <nav class="desktop-menu">
          <a class="nav-button-1 nav-button" href="/index.html">Home</a>
          <a class="nav-button-2 nav-button" href="/content/grays-tea/about.html" >About</a>
          <a class="nav-button-3 nav-button" href="/content/grays-tea/CozyRing/CozyRing.html">Join Cozy Ring</a>
          <a class="nav-button-4 nav-button" href="#">Web Dev Resources</a>
          <a class="nav-button-5 nav-button" href="#" >Fun</a>
          <a class="nav-button-6 nav-button" href="#">Links</a>
          <a class="nav-button-7 nav-button" href="/content/grays-tea/manifesto.html">Manifesto</a>
          <a class="nav-button-8 nav-button" href="/content/grays-tea/contact.html">Contact</a>
      </nav>
    </header>

    `;
  }
}

customElements.define('header-component', Header);

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}