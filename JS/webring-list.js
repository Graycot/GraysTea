class Webrings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <main class="webrings-element">
      <div class="webring-bin">
        <div id='CozyRing'></div>
      </div>
      <div class="webring-bin">
      <div class="yw-widget-text nowrap" data-yw-url="https://graystea.neocities.org/"><script src="/widgets/yesterweb.js"></script></div>
      </div>
      <div class="webring-bin">
        <a href="https://webring.bucketfish.me/redirect.html?to=prev&name=Gray"> < </a>
        <a href="https://webring.bucketfish.me" target="_blank">bucket webring</a>
        <a href="next page: https://webring.bucketfish.me/redirect.html?to=next&name=Gray"> > </a>
      </div>
      <div class="webring-bin">
        <a href="https://hotlinewebring.club/GraysTea/previous"> < </a>
        <a href="https://hotlinewebring.club/" target="_blank">Hotline</a>
        <a href="https://hotlinewebring.club/GraysTea/next"> > </a>
      </div>
      <div class="webring-bin">
        <a href="https://webring.dinhe.net/prev/https://graystea.neocities.org/"> < </a>
        <a href="https://webring.dinhe.net" target="_blank"> Retronaut </a>
        <a href="https://webring.dinhe.net/next/https://graystea.neocities.org/"> > </a>
      </div>
      <div class="webring-bin">
        <a href="http://geekring.net/site/156/previous"> < </a>
        <a href="https://geekring.net/" target="_blank"> GeekRing </a>
        <a href="http://geekring.net/site/1/next"> > </a>
      </div>
    </main>

    `;
  }
}

customElements.define('webring-list-component', Webrings);

var imported = document.createElement('script');
imported.src = 'compact-text-widget.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = '/widgets/yesterweb.js';
document.head.appendChild(imported);

/*
    <main class="webrings-element">
      <table>
        <th><div id='CozyRing'><script type="text/javascript" src="https://raw.githack.com/Graycot/CozyRing/master/compact-text-widget.js"></script></div></th>
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
        <th><div class="yw-widget-text nowrap" data-yw-url="https://graystea.neocities.org/"><script src="/widgets/yesterweb.js"></script></div></th>
        

      </table>
    </main>
*/