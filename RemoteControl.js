/** @class RemoteControl */
class RemoteControl extends HTMLElement {
    constructor() {
        super();
        console.log( 'RemoteControl constructor' );
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./remote_control.css" />
        <h2></h2>
        <div id="test">
            <div class="container">
                <div class="this_team_score"><slot     name="this_team_score"     /></div>
                <div class="opposing_team_score"><slot name="opposing_team_score" /></div>
                <div class="remote_undo_button">UNDO</div>
                <div class="remote_reset_button">RESET</div>
                <div class="transmitting_led"></div>
            </div>
        </div>`;        
    }

    static get observedAttributes() {
        return [ "remote_title" ];
    }

    attributeChangedCallback( name, oldValue, newValue ) {
        this.shadowRoot.querySelector( "h2"                   ).innerText        = this.getAttribute( "remote_title"              );
        this.shadowRoot.querySelector( ".this_team_score"     ).style.background = this.getAttribute( "this_background_color"     );
        this.shadowRoot.querySelector( ".opposing_team_score" ).style.background = this.getAttribute( "opposing_background_color" );
        this.shadowRoot.querySelector( ".remote_reset_button" ).style.background = "black";
        this.shadowRoot.querySelector( ".remote_reset_button" ).style.color      = "white";
        this.shadowRoot.querySelector( ".remote_undo_button"  ).style.background = "black";
        this.shadowRoot.querySelector( ".remote_undo_button"  ).style.color      = "white";
    }
    
    callBackAction = () => {}
    connectedCallback(){} 
}

customElements.define( 'remote-control', RemoteControl );
