class Webrings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <main class="webrings-element">
      <div class="webring-bin">
      <a href="https://graycot.com/webring/loop-redirect.html?action=prev"> < </a>
      <a href="https://graycot.com/webring/index.html"> Loop Ring </a>
      <a href="https://graycot.com/webring/loop-redirect.html?action=next"> > </a>
      </div>
      <div class="webring-bin">
        <a href="https://webring.yesterweb.org/noJS/index.php?d=prev&url=https://graystea.neocities.org/"> <</a>
        <a href="https://yesterweb.org/webring/">Yesterweb</a>
        <a href="https://webring.yesterweb.org/noJS/index.php?d=next&url=https://graystea.neocities.org/"> > </a>
      </div>
      <div class="webring-bin">
        <a href="https://webring.bucketfish.me/redirect.html?to=prev&name=Gray"> < </a>
        <a href="https://webring.bucketfish.me" target="_blank">bucket webring</a>
        <a href="https://webring.bucketfish.me/redirect.html?to=next&name=Gray"> > </a>
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
      <div class="webring-bin">
        <a href="//nightfall.city/writers-lane/">Writer's Lane, Nightfall City</a>
      </div>
      <div class="webring-bin">
      <a href="https://smoothsailing.asclaria.org/"> Smooth Sailing </a>
      </div>
      <div class="webring-bin">
      <a href="https://fans.thislove.nu/html"> HTML </a>
      </div>
      <div class="webring-bin">
      <a href="https://fans.thislove.nu/css/"> CSS </a>
      </div>
      <div class="webring-bin">
        <a href="https://list-me.com"> ListMe </a>
      </div>
      <div class="webring-bin">
        <a href="http://linklane.net"> LinkLane </a>
      </div>
      </main>
      
      `;
  }
}




customElements.define('webring-list-component', Webrings);


