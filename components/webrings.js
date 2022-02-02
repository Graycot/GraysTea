class Webrings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <main class="webrings-element">
      <table>
        <th><div id='CozyRing'><script type="text/javascript" src="https://graystea.neocities.org/CozyRing/compact-text-widget.js"></script></div></th>
        <th class="spacer"></th>
        <th><a href="https://hotlinewebring.club/GraysTea/previous"> < </a></th>
        <th><a href="https://hotlinewebring.club/" target="_blank">Hotline</a></th>
        <th><a href="https://hotlinewebring.club/GraysTea/next"> > </a></th>
        <th class="spacer"></th>
        <th><a href="https://webring.dinhe.net/prev/https://graystea.neocities.org/"> < </a></th>
        <th><a href="https://webring.dinhe.net" target="_blank"> Retronaut </a></th>
        <th><a href="https://webring.dinhe.net/next/https://graystea.neocities.org/"> > </a></th>
        <th class="spacer"></th>
        <th><a href="http://geekring.net/site/156/previous"> < </a></th>
        <th><a href="https://geekring.net/" target="_blank"> GeekRing </a></th>
        <th><a href="http://geekring.net/site/1/next"> > </a></th>
        <th class="spacer"></th>
        <th><div class="yw-widget-text" data-yw-url="YOUR_URL_HERE"><script src="/widgets/yesterweb.js"></script></div></th>
        

      </table>
    </main>

    `;
  }
}

customElements.define('webrings-component', Webrings);

var imported = document.createElement('script');
imported.src = 'https://graystea.neocities.org/CozyRing/compact-text-widget.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = '/widgets/yesterweb.js';
document.head.appendChild(imported);


/*
<main class="webrings-element">
<div id='CozyRing'><script id="CozyRing" type="text/javascript" src="/CozyRing/compact-text-widget.js"></script></div>
<ul>
<li><a href="https://hotlinewebring.club/GraysTea/previous"> < </a></li>
<li><a href="https://hotlinewebring.club/" target="_blank">Hotline</a></li>
<li><a href="https://hotlinewebring.club/GraysTea/next"> > </a></li>
</ul>
<ul>
<li><a href="https://webring.dinhe.net/prev/https://graystea.neocities.org/"> < </a></li>
<li><a href="https://webring.dinhe.net" target="_blank"> Retronaut </a></li>
<li><a href="https://webring.dinhe.net/next/https://graystea.neocities.org/"> > </a></li>
</ul>
<ul>
<li><a href="http://geekring.net/site/NUMBER/previous"> < </a></li>
<li><a href="https://geekring.net/" target="_blank"> GeekRing </a></li>
<li><a href="http://geekring.net/site/NUMBER/next"> > </a></li>
</ul>
</main>
*/