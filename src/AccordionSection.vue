/* eslint-disable prettier/prettier */
<template>
    <div>
        <div  class="accordion" 
            :monitored_object_id="monitored_object_id"
            :data_source_type="data_source_type"
            :data_source_location="data_source_location"
            :id="accordion_color"
            >
            <strong>{{ monitored_object_id }}</strong>&nbsp;&nbsp;&nbsp;&nbsp;
            <span :id="accordion_text"></span>
        </div>
        <div class="panel">
            <monitored-object 
                :object_id="monitored_object_id"
                :data_source_type="data_source_type"
                :data_source_location="data_source_location">
            </monitored-object>
        </div>
    </div>
</template>

<script lang="ts">
import ServerLedData from "../src/typescript_source/concrete/ServerLedData";
import { defineComponent } from "vue";
import { MonitoredObject } from "@egadams/monitored-object";
export default defineComponent({
    name: "AccordionSection", 
    components: {
        MonitoredObject
    },   
    props: {
        monitored_object_id:  { type: String, default: "" },
        data_source_type:     { type: String, default: "" },
        data_source_location: { type: String, default: "" }},    
    data: () => ({ 
        monitor_led_data: new ServerLedData(),
        accordion_color: "", accordion_text: "", kebob_name: "", numeral_id: "", accordion_id: ""
    }),
    mounted() {
        console.log( "monitored_object_id: " + this.monitored_object_id );
        let name_split = this.monitored_object_id.split( "_" );
        this.numeral_id = name_split[ 1 ];
        this.kebob_name = this.kebabize( name_split[ 0 ] );
        this.accordion_id = this.kebob_name + "-" + this.numeral_id;
        let led_listen_event = "event-" + this.kebob_name + "-" + this.numeral_id;
        let accordion_color = "accordion-color-" + this.kebob_name + "-" + this.numeral_id;
        let accordion_text  = "accordion-text-"  + this.kebob_name + "-" + this.numeral_id;
        this.accordion_color = accordion_color;  // event listener keeps bitching about the "this"
        this.accordion_text  = accordion_text;   // so the solution is... don't use it.
        document.addEventListener( led_listen_event,  function( event: any ) {
            let accordion_background_color = document.getElementById( accordion_color );
            if ( !accordion_background_color ) { throw( Error( "*** ERROR: element not defined! ***" )) }
            console.log( "*** accordion-section.vue: event received: " + led_listen_event );
            accordion_background_color.parentElement!.style.backgroundColor=event.detail.monitorLedData.classObject.background_color;
            accordion_background_color.style.backgroundColor=event.detail.monitorLedData.classObject.background_color;
            let accordion_text_element = document.getElementById( accordion_text );
            if ( !accordion_text_element ) { throw( Error( "*** ERROR: element not defined! ***" )) }
            accordion_text_element.innerHTML = event.detail.monitorLedData.ledText;
        });

        setTimeout( function() {
            let accordion_element = document.getElementById( accordion_color )?.parentElement;    
            accordion_element!.addEventListener( "click", ( click_event ) => {
                const accordion_section_clicked = click_event.currentTarget as HTMLElement;
                const panel = accordion_section_clicked.lastChild as HTMLElement;
                if ( panel.style.display === "block" ) {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block"; }}); }.bind( this ), 1000 );
    },
    methods: {
        kebabize( str: string ) {
            return str.split('').map((letter, idx) => {
                return letter.toUpperCase() === letter
                ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
                : letter;
        }).join(''); }
    }
});
</script>

<style scoped>
    :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
    }
    .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
    }
    .active,
    .accordion:hover {
        background-color: #ccc;
    }
    .panel {
        padding: 0 18px;
        display: none;
        background-color: white;
        overflow: hidden;
    }
</style>
