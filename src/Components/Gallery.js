import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }

    componentDidMount() {
        axios.get('https://res.cloudinary.com/dgz8jbog1/folders/list/MetalFabProducts').then(res => {
            console.log(res.data.resources);
            this.setState({gallery: resdata.resources});
        })
    }
    render(){
        return(
            <div className="main">
                <h1>Galleria</h1>
                <div className="gallery">
                    <CloudinaryContext cloudName="CLOUDNAME">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <a target="_blank" href={`https://res.cloudinary.com/christekh/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                            </a>
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>
        )
    }
}

//     uploadWidget() {
//         cloudinary.openUploadWidget({ cloud_name: 'dgz8jbog1', upload_preset: 'PRESET', tags:['xmas']},
//             function(error, result) {
//                 console.log(result);
//             });
//     }
//     render(){
//         return (
//             <div className="main">
//                 <h1>Galleria</h1>
//                 <div className="upload">
//                     <button onClick={this.uploadWidget.bind(this)} className="upload-button">
//                         Add Image
//                     </button>
//                 </div>
//             </div>

//         );
//     }
// }

// render(<Gallery />, document.getElementById('container'));