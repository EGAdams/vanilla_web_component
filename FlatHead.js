/** @class FlatHead */
class FlatHead extends HTMLElement {
    constructor() {
        super();
        console.log( 'FlatHead constructor' );
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<div>I am a very useful screwdriver.</div>`;
             
    }
}

customElements.define( 'flat-head', FlatHead );
