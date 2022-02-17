class nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <nav class="nav-element">
      <nav class="desktop-menu">
          <a class="nav-button-1 nav-button" href="/index.html">Home</a>
          <a class="nav-button-2 nav-button" href="/content/grays-tea/join-cozy-ring.html" >Join Cozy Ring</a>
          <a class="nav-button-3 nav-button" href="/content/grays-tea/entertainment.html">Entertainment</a>
          <a class="nav-button-4 nav-button" href="/content/grays-tea/cool-online-places.html">Cool Online Places</a>
          <a class="nav-button-5 nav-button" href="/content/grays-tea/educational-resources.html">Educational Resources</a>
          <a class="nav-button-6 nav-button" href="/content/grays-tea/useful-tools.html" >Useful Tools</a>
          <a class="WIP nav-button-7 nav-button" href="/content/grays-tea/my-projects.html">My Projects</a>
          <a class="nav-button-8 nav-button" href="/content/grays-tea/about.html">About</a>
          <a class="nav-button-9 nav-button" href="/content/grays-tea/contact.html">Contact</a>
          <a class="nav-button-10 nav-button" href="/testing-zone.html">Testing Zone</a>
          <a class="WIP nav-button-11 nav-button" href="/content/grays-tea/clone-this-website.html">Clone this website</a>
      </nav>
    </nav>

    `;
  }
}

customElements.define('nav-component', nav);
