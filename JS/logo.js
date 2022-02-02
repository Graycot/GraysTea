class Logo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="logo-element">
      <div id="logo"><a href="/index.html">Gray's Tea</a></div>
    </header>

    `;
  }
}

customElements.define('logo-component', Logo);

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}