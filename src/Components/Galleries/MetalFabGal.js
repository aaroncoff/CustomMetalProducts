import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import '../../App.css';

const IMAGES = [{
        src: require("../../Media/Images/Gallery/IMG_3829.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3830.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3831.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3827.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3838.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3837.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3832.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3835.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3836.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3834.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3833.jpg"),
        caption: "Recycling Facility conveyor And Structural Fab/Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3853.jpg"),
        caption: "Glass L-Buck & Glass Tote"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3855.jpg"),
        caption: "Dump Chipper Body"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3857.jpg"),
        caption: "Dump Chipper Body"
    // }, {
    //     src: require("../../Media/Images/Gallery/IMG_3856.jpg"),
    //     caption: "84”x108” Double Sided Van Rack"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3854.jpg"),
        caption: "Dump Chipper Body"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3858.jpg"),
        caption: "Dump Chipper Body"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3859.jpg"),
        caption: "Dump Chipper Body"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3861.jpg"),
        caption: "Glass L-Buck & Glass Tote"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3860.jpg"),
        caption: "Dump Chipper Body"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3862.jpg"),
        caption: "Piping"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3864.jpg"),
        caption: "Industrial Handrails"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3865.jpg"),
        caption: "Industrial Handrails"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3863.jpg"),
        caption: "Piping"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3866.jpg"),
        caption: "Piping"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3812.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3814.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3817.jpg"),
        caption: "Piping"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3815.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3816.jpg"),
        caption: "Piping"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3818.jpg"),
        caption: "Piping"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3813.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3823.jpg"),
        caption: "Filter House Fabrication & Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3824.jpg"),
        caption: "Filter House Fabrication & Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3822.jpg"),
        caption: "Filter House Fabrication & Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3819.jpg"),
        caption: "Piping"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3821.jpg"),
        caption: "Filter House Fabrication & Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3820.jpg"),
        caption: "Filter House Fabrication & Installation"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3825.jpg"),
        caption: "Duct Work"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3826.jpg"),
        caption: "Duct Work"
    }, {
        src: require("../../Media/Images/Gallery/mtl1.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/mtl2.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/mtl3.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/mtl4.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/mtl5.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/mtl6.jpg"),
        caption: ""
    }].map(img => {
        img.thumbnail = img.src;
        img.thumbnailWidth = 320;
        img.thumbnailHeight = 174;
        img.orientation = 1;

        return img;
    });


export default class MetalFabGal extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="gallery-container clearfix">
            <h1>
                If it is made of metal, we can make it
            </h1>
                <h2>Piping, Filter House Fabrication & Installation, 
                    Duct Work, Industrial Handrails, Dump Chipper Body, 
                    Recycling Facility Conveyer, Structural Fabrication/Installation
                </h2>
                {/* <p>If it is made of metal, we can make it.</p> */}
                <Gallery images={IMAGES} />
            </div>
        );
    }
}