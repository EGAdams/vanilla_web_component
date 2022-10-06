/* eslint-disable import/order */
/** @class DataSource */
import jQuery from "jquery";
import IApiArgs from "../abstract/IApiArgs";

export default class DataSource {
    private url :string;
    constructor( location: string ) { this.url = location } // establish communication address

    runQuery( apiArgs: IApiArgs ) {  // send data, redirect result.
        jQuery.post( this.url, { sql: apiArgs.query }).done( function( dataArg: string ) {
            try {
                apiArgs.data = JSON.parse( dataArg );
            } catch( e ) {
                console.log( "*** ERROR: failed to parse JSON data from server. ***" );
                console.log( "*** ERROR: dataArg: " + dataArg + " ***" );
            }
            jQuery( document ).trigger( /* event */ apiArgs.trigger, /* event arguments */ apiArgs );
        }); }
}
