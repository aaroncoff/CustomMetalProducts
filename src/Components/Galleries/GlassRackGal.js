import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import '../../App.css';

const IMAGES = [{
        src: require("../../Media/Images/Gallery/IMG_3810.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3807.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3806.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3808.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3811.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3839.jpg"),
        caption: "24’ Aluminum Body (for AIG)"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3840.jpg"),
        caption: "24’ Aluminum Body (for AIG)"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3841.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3844.jpg"),
        caption: "Slide In A-Frame"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3843.jpg"),
        caption: "Slide In A-Frame"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3842.jpg"),
        caption: "24’ Aluminum Body (for AIG)"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3845.jpg"),
        caption: "Glass L-Buck & Glass Tote"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3847.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3846.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3848.jpg"),
        caption: "Rolling Glass Dolly"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3849.jpg"),
        caption: "Rolling Glass Dolly"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3850.jpg"),
        caption: "Rolling Glass Dolly"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3851.jpg"),
        caption: "Glass L-Buck & Glass Tote"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3852.jpg"),
        caption: "Glass L-Buck & Glass Tote"
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
        src: require("../../Media/Images/Gallery/IMG_3828.jpg"),
        caption: "Duct Work"
    }].map(img => {
        img.thumbnail = img.src;
        img.thumbnailWidth = 320;
        img.thumbnailHeight = 174;
        img.orientation = 1;

        return img;
    });

export default class GlassRackGal extends Component {
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