class Head extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i,900,900i" />
   
    <link rel="stylesheet" href="/CSS/reset.css">
    <link rel="stylesheet" href="/CSS/header-footer.css">
    <link rel="stylesheet" href="/CSS/style.css">
    <link rel="stylesheet" href="/CSS/webrings.css">

    `;
  }
}

customElements.define('head-component', Head);



var imported = document.createElement('script');
imported.src = '/components/header.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = '/components/webrings.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = '/components/footer.js';
document.head.appendChild(imported);

