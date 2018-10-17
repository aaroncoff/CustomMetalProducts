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
    }, {
        src: require("../../Media/Images/Gallery/IMG_3856.jpg"),
        caption: "84”x108” Double Sided Van Rack"
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
                <Gallery images={IMAGES} />
            </div>
        );
    }
}