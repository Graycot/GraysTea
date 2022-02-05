class Logo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="logo-element">
      <a href="/index.html">Gray's Tea</a>
    </header>

    `;
  }
}

customElements.define('logo-component', Logo);

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}