import React, { Component } from 'react';

class TypeWriter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            texts: this.props.texts,
            fontSize: this.props.fontSize,
            className: this.props.className,
            
            typing: true,
            arr_index: 0,
            index: 0,
            display_text: "",
            
        }
    }

    componentDidMount() {
        this.typewriter();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.className !== this.props.className) {
            this.setState({ 
                className: this.props.className
            })
        }
    }

    typewriter = () => { 
        if (this.state.typing) {
            if (this.state.index < this.state.texts.length + 1) {    
                this.setState({
                    display_text: this.state.texts.slice(0, this.state.index),
                    index: this.state.index + 1
                })
                setTimeout(this.typewriter, 180)
            } else{
                this.setState({
                    typing: false,
                    index: 0
                })
            }
        }
    }

    render() {
        return(
            <div 
                id="typewriter" 
                className={this.state.className} 
                style={{fontSize: this.state.fontSize, paddingRight: 5}}
                onClick={this.props.onClick}
            >
                {this.state.display_text}
            </div>
        )
    }
}


TypeWriter.defaultProps = {
    fontSize: 42,
    className: ""
}

export default TypeWriter;
