/** @class LogObject */
class LogObject extends HTMLElement {
    constructor() {
        super();
        console.log( 'LogObject constructor' );
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            .log-object-container {
                column-gap: 15px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 0.1px;
                border: solid 0.0px;
                margin-bottom: 3px;
            }
            li { 
                list-style: none;
            }
        </style>
        <div>
            <li>
                <div class="log-object-container">
                    <div>
                        <slot name="method" class="method"></slot>
                    </div>
                    <div>
                        <slot name="timestamp"></slot>
                    </div>
                    <div>
                        <slot name="message"></slot>
                    </div>
                </div>
            </li>
        </div>`; }

    static get observedAttributes() { return [ "remote_title" ]; }

    attributeChangedCallback( name, oldValue, newValue ) {
        this.shadowRoot.querySelector( "h2"                   ).innerText        = this.getAttribute( "remote_title"              );
        this.shadowRoot.querySelector( ".this_team_score"     ).style.background = this.getAttribute( "this_background_color"     );
        this.shadowRoot.querySelector( ".opposing_team_score" ).style.background = this.getAttribute( "opposing_background_color" );
        this.shadowRoot.querySelector( ".remote_reset_button" ).style.background = "black";
        this.shadowRoot.querySelector( ".remote_reset_button" ).style.color      = "white";
        this.shadowRoot.querySelector( ".remote_undo_button"  ).style.background = "black";
        this.shadowRoot.querySelector( ".remote_undo_button"  ).style.color      = "white"; }
    
    callBackAction = () => {}
    connectedCallback(){} 
}

customElements.define( 'log-object', LogObject );
