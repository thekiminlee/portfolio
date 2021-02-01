import React, { Component} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { _handleEmptyClick } from '../utils.jsx';

class LinkContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: this.props.links, // Array of links
            icons: this.props.icons, // Array of icons
            ids: this.props.ids, // Array of ids

            onClicks: this.props.onClicks, // optional
            clickable: this.props.clickable,

            fade: this.props.fade,

            count: 0,
        
        }
    }

    componentDidMount() {
        this.setState({
            count: this.state.links.length
        })
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.fade !== this.props.fade) {
            this.setState({fade: this.props.fade})
        }
    }

    showIcon() {
        if(this.state.fade) {
            return <img src={this.state.icon} alt={"icon"}/>
        }
    }

    createLinks() {
        let links = [];
        for (let i = 0; i < this.state.count; i++) {
            links.push(
                <li>
                    <a href={this.state.links[i]}>
                        <span id={this.state.ids[i]}></span>
                        <span id={this.state.ids[i]}></span>
                        <span id={this.state.ids[i]}></span>
                        <span id={this.state.ids[i]} onClick={this.state.clickable ? this.state.onClicks[i] : _handleEmptyClick}>
                            <FontAwesomeIcon className={(this.state.fade ? "fadein" : "fadeout")} icon={this.state.icons[i]}/>
                        </span>
                    </a>
                </li>
            )
        }

        return links;
    }

    render() {
        return (
            <div id="link-container">
                <ul className={(this.state.fade ? "fadein" : "fadeout") + " d-flex justify-content-between"}>
                    { this.createLinks()}
                </ul>
            </div>
        )
    }
}

LinkContainer.defaultProps = {
    clickable: false,
    fade: true,
}

export default LinkContainer;