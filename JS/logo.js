class Logo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <header class="logo-element">
      <p class="logo-button" href="/index.html">Gray's Tea</p>
    </header>

    `;
  }
}

customElements.define('logo-component', Logo);
