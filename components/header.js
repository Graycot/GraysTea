class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="header-element">
      <div id="logo"><a href="/index.html">Gray's Tea</a></div>
      <nav>
        <ul class="desktop-menu">
          <li id="home"><a href="/index.html">Home</a></li>
          <li id="fun"><a href="/content/grays-tea/welcome.html">Welcome</a></li>
          <li id="blog"><a href="/content/grays-tea/manifesto.html">Manifesto</a></li>
          <li id="guestbook"><a href="http://pub16.bravenet.com/guestbook/1352909387">GuestBook</a></li>
          <li id="about"><a href="/content/grays-tea/about.html" >About</a></li>
          <li id="contact"><a href="/content/grays-tea/contact.html">Contact</a></li>
        </ul>
      </nav>
      <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobile-menu">
          <li id="home"><a href="/index.html">Home</a></li>
          <li id="fun"><a href="/content/grays-tea/welcome.html">Welcome</a></li>
          <li id="blog"><a href="/content/grays-tea/manifesto.html">Manifesto</a></li>
          <li id="guestbook"><a href="http://pub16.bravenet.com/guestbook/1352909387">GuestBook</a></li>
          <li id="about"><a href="/content/grays-tea/about.html">About</a></li>
          <li id="contact"><a href="/content/grays-tea/contact.html">Contact</a></li>
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