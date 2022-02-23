class welcome extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div class="grid-wrapper">
    <main class="main-container">
    <div class="header">
            <h1> Welcome traveler. </h1>
            <p> <em> Read this pamphlet to start your journey.</em></p>
    </div>
            <p>
                    You have ventured far across the vast expanse of the internet to arrive at this place, in this time. You deserve to rest.
                Boil a pint of water and add your favorite melody of leaves. Sit back and relax. Let the heat and aroma tend to your weary bones. You are now in the lounge,
                a safe and calming place. Let your mind expand without bounds. Explore yourself, your thoughts, and your nature. We all will eventually meet our expiry on this mortal plane,
                and there is simply not enough life to spare on petty matters within our own mind. Cast aside the worry and stress of tomorrow. You exist in the present,
                therefore you should live in the present. Are you hungry? Go eat. Are you thristy? Stay hydrated. Are you curious? Continue foward and carve your own path.
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">You must commit to your own adventure.</a>
            </p>
            <figure>
                <img src=/media/steaming-tea-with-blur.jpeg alt="cup of tea">
                <figcaption>
                    <p>
                        https://www.pexels.com/photo/black-ceramic-cup-with-smoke-above-41135/
                    </p>
                </figcaption>
            </figure>
            <h2> THE JOURNEY:</h2>
            <p>
                    Here on Gray's Tea, I share my adventure. I archive the mundane, the memories, and the magic of life. I do not know how long I will exist as I currently do.
                Tomorrow I could get hit by a bus, have a stroke, choke on a bone, or perish in countless other manners. I may pass quickly or I may succumb to mental deterioration.
                In any case, my essence is trapped in time and preserved in this text. This webpage may be humming on a remote server for years or even decades after I am gone.
                Perhaps a web crawler archived this page, and you, a unique individual exploring the collective wisdom of humanity on the internet have stumbled upon my humble diary by sheer chance.
                My essence lives in your mind, as you have read this text. For that <strong>I thank you</strong>.
            </p>
    </main>
    </div>

    `;
  }
}

customElements.define('welcome-component', welcome);
