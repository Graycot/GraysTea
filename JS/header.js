class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="header-element">
      <nav>
        <ul class="desktop-menu">
          <li id="header-button-1"><a href="/index.html">Home</a></li>
          <li id="header-button-2"><a href="/content/grays-tea/about.html" >About</a></li>
          <li id="header-button-3"><a href="/content/grays-tea/CozyRing/CozyRing.html">Join Cozy Ring</a></li>
          <li id="header-button-4"><a href="#">Web Dev Resources</a></li>
          <li id="header-button-5"><a href="#" >Fun</a></li>
          <li id="header-button-6"><a href="#">Links</a></li>
          <li id="header-button-7"><a href="/content/grays-tea/manifesto.html">Manifesto</a></li>
          <li id="header-button-8"><a href="/content/grays-tea/contact.html">Contact</a></li>
        </ul>
      </nav>
      <div id="mobile-logo"><a href="/index.html">Gray's Tea</a></div>
      <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobile-menu">
          <li id="header-button-1"><a href="/index.html">Home</a></li>
          <li id="header-button-2"><a href="/content/grays-tea/about.html" >About</a></li>
          <li id="header-button-3"><a href="/content/grays-tea/CozyRing/CozyRing.html">Join Cozy Ring</a></li>
          <li id="header-button-4"><a href="#">Web Dev Resources</a></li>
          <li id="header-button-5"><a href="#" >Fun</a></li>
          <li id="header-button-6"><a href="#">Links</a></li>
          <li id="header-button-7"><a href="/content/grays-tea/manifesto.html">Manifesto</a></li>
          <li id="header-button-8"><a href="/content/grays-tea/contact.html">Contact</a></li>
        </ul>
      </div>
    </header>

    `;
  }
}

customElements.define('header-component', Header);

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}