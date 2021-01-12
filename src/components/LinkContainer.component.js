import React, { Component} from 'react';

class LinkContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: this.props.height,
            color: this.props.color,
            link: this.props.link,
            logo: this.props.logo
        }
    }

    render () {
        return (
            <div style={{height: this.state.height, width: '100%', backgroundColor: this.state.color}}>
                <a href={this.state.link}>{this.state.logo}</a>
            </div>
        )
    }
}

export default LinkContainer;