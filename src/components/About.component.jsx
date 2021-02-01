import React from 'react';

import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from "@material-ui/core/Backdrop";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import {faNode, faPython, faJava, faJs, faReact, faVuejs, faDocker} from "@fortawesome/free-brands-svg-icons";



// const ABOUT = "5ft 10in\n150lb\n";
const HEADING = "KIMIN LEE"

class About extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            open: this.props.open,
            onClose: this.props.onClose,

            timeout: this.props.timeout

        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.open !== this.props.open) {
            this.setState({
                open: this.props.open
            })
        }
    }

    aboutContent() {   
        const iconSize = "4.2vmin";     
        return (
            <p className="questrial">
                I am a 25 y/o <em>software engineer</em> <text className="smaller-font">(kind of)</text> in <text className="yellow">Orange County</text> who likes to think of himself as a full-stack engineer, but deep inside crying for backend engineer position as even the UI for this very website took me forever to organize <text className="smaller-font">sad . . .</text><br/><br/>
                
                Here are my current tech stack <text className="smaller-font"><em>the ones I am confident with anyway</em></text>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="stack" style={{width: "70%", fontSize: "2.3vmin"}}>
                        <div id="language" className="line">
                            <FontAwesomeIcon style={{fontSize: iconSize, color: "rgb(72, 136, 255)"}} icon={faPython}/>
                            <FontAwesomeIcon style={{fontSize: iconSize, color: "orange"}} icon={faJava}/>
                            <FontAwesomeIcon style={{fontSize: iconSize, color: "rgb(216, 176, 0)"}} icon={faJs}/>
                            {/* <text><b>C++</b></text> */}
                        </div>                    
                        <div id="frontend" className="line">
                            <FontAwesomeIcon style={{fontSize: iconSize, color: "rgb(80, 201, 240)"}} icon={faReact}/>
                            <FontAwesomeIcon style={{fontSize: iconSize, color: "rgb(53, 166, 108)"}} icon={faVuejs}/>
                        </div>
                        <div id="backend" className="line">
                            <text className="django">django</text>
                            <text className="roboto light">Express.js</text>
                            <FontAwesomeIcon style={{fontSize: iconSize, color: "rgb(98, 157, 78)"}} icon={faNode}/>
                            <FontAwesomeIcon style={{fontSize: iconSize, color: "rgb(87, 134, 173)"}} icon={faJava}/>
                        </div>
                        <div id="devops" className="line">
                            <FontAwesomeIcon style={{fontSize: iconSize, color: "rgb(31, 123, 224)"}} icon={faDocker}/>
                        </div>
                    </div>
                </div>

                I am also greatly interested in <b>machine learning</b>, particularly in <em>computer vision</em> and <em>natural language processing</em>. Currently in the process of adding machine learning to my tech stack, so any opportunities in the field are welcomed. <br/><br/>

                <div style={{width: "inherit", textAlign: 'center', marginTop: '10px'}}>
                    <text className="small-font">If you like the website, or have any questions, contact me through</text>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                    <div className="icon cursor">
                        <a href="mailto:thekiminlee@gmail.com" style={{color: 'inherit'}}>
                            <FontAwesomeIcon style={{fontSize: "3.3vmin"}} icon={faEnvelope}/>
                        </a>
                    </div>
                    <div className="icon cursor">
                        <a href="tel:7144236938" style={{color: 'inherit'}}>
                            <FontAwesomeIcon style={{fontSize: "3.3vmin"}} icon={faMobileAlt}/>
                        </a>
                    </div>
                </div>
                <br/>
                <text className="smaller-font">
                    by the way this website has a dark mode if you haven't noticed. <br/>
                    Developed with <FontAwesomeIcon style={{color: "rgb(80, 201, 240)"}} icon={faReact}/> . . . and some other packages
                </text>
                 
            </p>
        )
    }

    displayAbout() {
        return (
            <div id="about">
                <div className="heading">
                    <h1 className="roboto bold">
                        {HEADING}
                    </h1>                    
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="about-content-container">
                        {this.aboutContent()}
                    </div>    
                </div>
            </div>
        )
    }

    render() {
        return (
            <Modal 
                className="d-flex align-items-center justify-content-center"
                open={this.state.open}
                onClose={this.state.onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    transitionDuration: this.props.timeout,
                    style: {backgroundColor: 'rgba(31,33,47,0.95)'}
                }}>
                <Fade in={this.props.open} timeout={this.props.timeout}>
                    {this.displayAbout()}
                </Fade>
            </Modal>
        )
    }
}

About.defaultProps = {
    timeout: 500
}

export default About;