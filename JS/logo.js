class Logo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="logo-element">
      <a class="logo-button" href="/index.html">Gray's Tea</a>
    </header>

    `;
  }
}

customElements.define('logo-component', Logo);
