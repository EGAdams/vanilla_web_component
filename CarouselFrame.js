/** @class CarouselFrame */
class CarouselFrame extends HTMLElement {
    constructor() {
        super();
        console.log( 'CarouselFrame constructor' );
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<div>This is a web component:<shadow-pictures></shadow-pictures></div>`;
             
    }
}

customElements.define( 'carousel-frame', CarouselFrame );
