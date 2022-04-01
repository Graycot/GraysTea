class welcome extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div class="grid-wrapper">
    <main class="main-container">
    <div class="header">
            <h1> Welcome Traveler. </h1>
            <p> <em> Read this pamphlet to start your journey.</em></p>
    </div>
            <p>
                    You have ventured far across the vast expanse of the internet to arrive at this place, in this time. You deserve to rest.
                Boil a pint of water and add your favorite melody of leaves. Sit back and relax. Let the heat and aroma tend to your weary bones. 
                You are now in the cafe, a safe and calming place free from the worries of yesterday. 
                Let your mind expand without bounds. Explore yourself, your thoughts, and your nature.
            </p>
            <figure>
                <img src=/media/steaming-tea-with-blur.jpeg alt="cup of tea">
                <figcaption>
                    <p>
                        https://www.pexels.com/photo/black-ceramic-cup-with-smoke-above-41135/
                    </p>
                </figcaption>
            </figure>
            <h2> GRAY'S TEA:</h2>
            <p>
                Here on Gray's Tea, I share my adventure. I archive the mundane, the memories, and the magic of life.
                You, a unique individual exploring the collective wisdom of humanity on the internet have stumbled upon my humble diary by sheer chance.  
            </p>
            <p>
            Before you lies my ultimate archive. I have collected links to fascinating personal websites,
            sources of entertainment, useful tools, and web development educational resources. 
            Explore the wild and wonderful web, start your journey by clicking the colorful rectangles at the top of this webpage.
            </p>
    </main>
    </div>

    `;
  }
}

customElements.define('welcome-component', welcome);
