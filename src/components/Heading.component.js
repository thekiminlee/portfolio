import React, { Component} from 'react';

class Heading extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: this.props.title,
            font_size: this.props.font_size,
            index: this.props.hover ? this.props.index : 0,
            position: this.props.hover ? 'absolute' : 'relative',
        }

    }

    render() {
        return (
            <div style={{fontSize: this.state.font_size, zIndex:this.state.index, position: this.state.position}}>
                { this.state.title}
            </div>
        )
    }
}

export default Heading;