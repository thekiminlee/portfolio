import React, { Component} from 'react';

import TypeWriter from '../components/TypeWriter.component.jsx';
import LinkContainer from '../components/LinkContainer.component.jsx';
import About from '../components/About.component.jsx';

import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faIdBadge } from '@fortawesome/free-regular-svg-icons';

import { _handleEmptyClick } from '../utils.jsx';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            showLinks: false,
            showAbout: false,
        }
    }
    
    displayLinkBoxes() {
        return (
                <LinkContainer 
                    links={[
                        "#", 
                        "https://www.linkedin.com/in/thekiminlee", 
                        "https://www.github.com/thekiminlee", 
                        "https://drive.google.com/file/d/1mDg_6LStOXBo_8zJyv3DDKOYbi5V1q88/view?usp=sharing"]} 
                    ids={[
                        "first-box", 
                        "second-box", 
                        "third-box", 
                        "fourth-box"]}
                    icons={[
                        faIdBadge, 
                        faLinkedin, 
                        faGithub, 
                        faFilePdf]}
                    fade={this.state.showLinks} 
                    clickable={true}
                    onClicks={[
                        this._openAbout,
                        _handleEmptyClick,
                        _handleEmptyClick,
                        _handleEmptyClick
                    ]}
                    />
            
        )
    }

    displayTypewriter() {
        return (
            <TypeWriter className={"text questrial cursor " + (this.state.showLinks ? "slide up" : "slide down")}
                        texts="Hello, my name is Kimin Lee" 
                        onClick={this._toggleLinks} 
                        fontSize="6vmin"/> 
        )
    }

    displayAboutModal() {
        return (
            <About
                open={this.state.showAbout}
                onClose={this._closeAbout}
                timeout={600}
            />
        )
    }

    _toggleLinks = () => {
        this.setState({
            showLinks: !this.state.showLinks,
        })
    }

    _openAbout = () => {
        console.log("open about")
        this.setState({
            showAbout: true,
        })
    }

    _closeAbout = () => {
        console.log("close about")
        this.setState({
            showAbout: false,
        })
    }

    render() {
        console.log('render')
        return (
            <div className='container'>
                <div className={"d-flex flex-column align-items-center justify-content-center"} style={{height: "100vh"}}>
                    {this.displayTypewriter()}
                    {this.displayLinkBoxes()}
                    {this.displayAboutModal()}            
                </div>
                
            </div>
        )
    }

}

export default Main;