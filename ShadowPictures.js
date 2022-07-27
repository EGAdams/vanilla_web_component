/** @class ShadowPictures */
class ShadowPictures extends HTMLElement {
    constructor() {
        super();
        console.log( 'ShadowPictures constructor' );
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<div><style>
        ken-burns-carousel {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
        }
    
        ken-burns-carousel#demo5 {
            --img-filter: grayscale(100%);
        }
    
        h2 {
            margin-top: 64px;
            font-size: 1.3em;
        }
    
        .demo {
            position: relative;
            height: 0;
            padding-bottom: 66.6%;
        }
    
        pre code {
            padding: 10px 15px !important;
        }
    
        ken-burns-carousel,
        pre {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        }
    
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 2fr 1fr;
            gap: 4px 4px;
            grid-auto-flow: row;
            grid-template-areas:
                "pictures pictures"
                "address times";
            width: 90%;
            height: 100%;
            min-width: 200px;
        }
    
        .vue-map {
            max-height: 303px;
            min-width: 29em;
            ;
        }
    
        .map {
            width: 400px;
            height: 0px;
            max-height: 400px;
        }
    
        .usedtobegriditem {
            background-color: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(0, 0, 0, 0.8);
            padding: 20px;
            font-size: 15px;
            text-align: center;
        }
    
        .address {
            /* grid-area: 2 / 1 / 3 / 2; */
            border-style: solid;
            border-width: 1px;
            padding: 3px;
        }
    
        .service_times {
            /* grid-area: 3 / 2 / 2 / 2; */
            border-style: solid;
            border-width: 1px;
            padding: 3px;
            font-size: 20px;
        }
    
        .title {
            font-size: 1.3em;
            font-weight: bold;
            padding: .5%;
            padding-top: 1.1%;
        }
    </style>
    <div class="grid-container">
        <div class="pictures">
            <div class="example">
                <div class="demo">
                    <ken-burns-carousel id="first_image_container"
                        fade-duration="1500"
                        slide-duration="6000"
                        images="https://www.riveroflifegrmi.org/templates/colddaybootstrap/images/church_location_sized.jpg
                        https://www.riveroflifegrmi.org/templates/colddaybootstrap/images/large_Robert_Barnes_wave_sized.jpg
                        https://www.riveroflifegrmi.org/photos/ministry_outreach_photos/another_church_in_argentina.jpg
                        https://www.riveroflifegrmi.org/templates/colddaybootstrap/images/leadership_party_robert_and_rosemary_1_08_sized.jpg
                        https://www.riveroflifegrmi.org/images/top_row/congregationpicture.jpg">
                    </ken-burns-carousel>
                </div>
            </div> 
        </div>
        <div class="pictures">
            <div class="example">
                <div class="demo">
                    <ken-burns-carousel id="second_image_container"
                        fade-duration="700"
                        slide-duration="6000"
                        images=
                        "https://www.riveroflifegrmi.org/photos/ministry_outreach_photos/outreach_06_012808.jpg
                        https://www.riveroflifegrmi.org/photos/ministry_outreach_photos/outreach_07_012808.jpg
                        https://www.riveroflifegrmi.org/photos/ministry_outreach_photos/outreach_11_012808.jpg
                        https://www.riveroflifegrmi.org/images/slider_row/100090002_10157601997037602_6020180131803299840_n.jpg
                        https://www.riveroflifegrmi.org/images/unlimited_row/1485995_877405962285249_5576116497943534535_o.jpg
                        "
                        >
                    </ken-burns-carousel>
                </div>
            </div>
        </div>
        <div class="address">
            <div>
                <div class="title">Address:</div>
                <a href="https://www.google.com/maps/place/River+of+Life+Ministries/@42.9856887,-85.7543093,17z/data=!3m1!4b1!4m5!3m4!1s0x8819af71710f100b:0xd2c9ac2d3dca2bd6!8m2!3d42.9856884!4d-85.7521153">
                3412 Leonard, N. W.
                Walker, Michigan 49534</a>
                <div class="title">Church Phone: </div>
                <a href="tel:6165401766">(616)540-1766</a> or <a href="tel:6165402928">(616)540-2928</a>
                <div class="title">Church Email: </div>
                <a href="mailto:rbarnesrol@aol.com"><strong>rbarnesrol@aol.com</strong></a>
            </div>
        </div>
        <div class="time">
            <div class="title">Service Times</div>
                <div class="service_times"> 
                    <div>
                        Wednesday</td><td><span style="padding-left: 3%">6:30pm Prayer 7pm Service</span>
                    </div>
                    <div>
                        <td>Saturday</td><td>9:30am Prayer - 9:45 am Service
                    </div>
                    <div>
                        Saturday</td><td>10:30am Brunch
                    </div>
                    <div>
                        Saturday</td><td>11am Service
                    </div>
                </div>
            <div><a href="http://www.facebook.com/rosemary.hermsbarnes">Rosemary's Facebook Page </a></span></div>
        </div>
    </div>`;             
    }
}

customElements.define( 'shadow-pictures', ShadowPictures );
