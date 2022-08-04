/** @class ShadowPictures */
class ShadowPictures extends HTMLElement {
    constructor() {
        super();
        console.log( 'ShadowPictures constructor' );
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<div><style>
        .demo {
            position: relative;
            height: 0;
            padding-bottom: 66.6%;
        }

        ken-burns-carousel {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
        }

        .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 2px 2px;
            grid-auto-flow: row;
            width: 100%;
            height: 100%;
        }

        .times {
            grid-area: 2 / 1 / 3 / 2;
        }

        .map {
            grid-area: 2 / 2 / 3 / 3;
        }

        .pictures {
            grid-area: 1 / 1 / 2 / 2;
        }

        .picturesR {
            grid-area: 1 / 2 / 2 / 3;
        }
        .title {
            padding-top: 2%;
            padding-bottom: 1%;
        }
    </style>
    <div class="grid-container">
        <div class="pictures">
        <div class="demo">
            <ken-burns-carousel id="second_image_container"
                    fade-duration="700"
                    slide-duration="6000"
                    images="https://www.riveroflifegrmi.org/templates/colddaybootstrap/images/church_location_sized.jpg
            https://www.riveroflifegrmi.org/templates/colddaybootstrap/images/large_Robert_Barnes_wave_sized.jpg
            https://www.riveroflifegrmi.org/templates/colddaybootstrap/images/leadership_party_robert_and_rosemary_1_08_sized.jpg
            https://www.riveroflifegrmi.org/photos/ministry_outreach_photos/another_church_in_argentina.jpg
            https://www.riveroflifegrmi.org/images/top_row/congregationpicture.jpg">
                </ken-burns-carousel>
        </div>
        </div>
        <div class="picturesR">
            <div class="demo">
                <ken-burns-carousel id="first_image_container"
                        fade-duration="700"
                        slide-duration="6000"
                        images="https://www.riveroflifegrmi.org/photos/ministry_outreach_photos/outreach_06_012808.jpg
            https://www.riveroflifegrmi.org/photos/ministry_outreach_photos/outreach_07_012808.jpg
            https://www.riveroflifegrmi.org/photos/ministry_outreach_photos/outreach_11_012808.jpg
            https://www.riveroflifegrmi.org/images/slider_row/100090002_10157601997037602_6020180131803299840_n.jpg
            https://www.riveroflifegrmi.org/images/unlimited_row/1485995_877405962285249_5576116497943534535_o.jpg">
                </ken-burns-carousel>
            </div>
            
        </div>
        <div class="map">
            <div>
                <div class="title"><strong>Service Times:</strong></div>

                <div>
                    <span>Wednesday</span>
                    <span>6:30pm Prayer 7pm Service</span>
                </div>
                <div>
                    <span>Saturday</span>
                    <span>9:30am Prayer - 9:45 am Service</span>
                </div>
                <div>
                    <span>Saturday</span>        
                    <span>10:30am Brunch</span>
                </div>
                <div>
                    <span>Saturday</span>
                    <span>11am Service</span>
                </div>
            
            </div>
            
        </div>
        <div class="times">
            <div>
                <div class="title"><strong>Address:</strong></div>
                <a
                    href="https://www.google.com/maps/place/River+of+Life+Ministries/@42.9856887,-85.7543093,17z/data=!3m1!4b1!4m5!3m4!1s0x8819af71710f100b:0xd2c9ac2d3dca2bd6!8m2!3d42.9856884!4d-85.7521153">
                    3412 Leonard, N. W.
                    Walker, Michigan 49534</a>
                <div class="title"><strong>Church Phone:</strong></div>
                <a href="tel:6165401766">(616)540-1766</a> or <a href="tel:6165402928">(616)540-2928</a>
                <div class="title"><strong>Email:</strong> </div>
                <a href="mailto:rbarnesrol@aol.com"><strong>rbarnesrol@aol.com</strong></a>
                <div><a href="http://www.facebook.com/rosemary.hermsbarnes">Rosemary's Facebook Page</a></div>            
            </div> 
        </div>
    </div>`;             
    }
}

customElements.define( 'shadow-pictures', ShadowPictures );
