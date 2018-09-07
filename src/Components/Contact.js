import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
// import nodemailer from 'nodemailer';



export default class Contact extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            email: '',
            text: ''
        }
        this.handleSubmitButton = this.handleSubmitButton.bind(this)
        // this.clearInputs = this.clearInputs.bind(this)
    }

   //set email subject to either "gig request" or "lesson request" based on radial button selector

//    clearInputs(e){
//        e.preventdefault(e)
//        this.setState({
//         name: '',
//         email: '',
//         text: ''
//        })
       
//    }

    handleSubmitButton(e){
        e.preventDefault()
        const {name,email,text} = this.state
        let body = {
            name: name,
            email: email,
            text: text
        }
        axios.post(`/api/sendEmail`, body).then(response => {
            console.log('-----response', response.data)
            this.setState({
                name: '',
                email: '',
                text: ''
               })
            alert("Your message has been sent")
        }).catch(err => {
            console.log('----------email send error', err)
        })
    }

    render(){
        return(
        
            <div className='contactParent'>

                <h1>CONTACT US TODAY FOR A FREE QUOTE</h1>

                                <div className='manualContact'>
                    
                    <div className='digits'>
                        <div className='phone'>PHONE: 678-426-8802</div>
                    </div>
                    <div className='address'>
                        <div>ADDRESS: 459 Cadillac Pkwy</div>
                        <div className='zip'>Dallas, GA 30157</div>
                    </div>
                </div>

                <div className='form-parent'>
                    <div className="form-child">
                        <form className="input">
                            <input id="name" placeholder="Your Name" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name}/>
                            <input id="email" placeholder="Your email address" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email}/>
                            <textarea className="message" id="text" placeholder="Message" onChange={(e)=>this.setState({text: e.target.value})} value={this.state.text}></textarea>
                            <button className='formSubmit' onClick={this.handleSubmitButton}>Submit</button>
                        </form>


                    </div>
                </div>

            </div>

                // <div>
                //     <div className="form-parent">
                //         <form className="input">
                //             <input id="name" placeholder="Your Name" onChange={(e)=>this.setState({name: e.target.value})}/>
                //             <input id="email" placeholder="Your email address" onChange={(e)=>this.setState({email: e.target.value})}/>
                //             <textarea className="message" id="text" placeholder="Message" onChange={(e)=>this.setState({text: e.target.value})}></textarea>
                //             <button onClick={this.handleSubmitButton}>Submit</button>
                //         </form>
                //     </div>
                // </div>
        )
    }
}