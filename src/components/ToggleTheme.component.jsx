import React, { Component} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/style/js/global';
import { lightTheme, darkTheme } from '../assets/style/js/theme';

import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';

const lightIcon = <WbSunnyOutlinedIcon style={{fontSize: '3vmin'}} htmlColor="#FFCA33"/>
const darkIcon = <NightsStayOutlinedIcon style={{fontSize: '3vmin'}} htmlColor="#34495E"/>

class ToggleTheme extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            theme: lightTheme,
            icon: darkIcon,
            darkToggled: false
        }
    }

    _toggle = () => {
        if (!this.state.darkToggled) {
            this.setState({
                theme: darkTheme,
                icon: lightIcon,
                darkToggled: true
            })
            console.log("here")
        } else {
            this.setState({
                theme: lightTheme,
                icon: darkIcon,
                darkToggled: false
            })
        }
    }

    render() {
        return (
            <div style={{padding:10, position:'absolute', zIndex:1}}>
                <ThemeProvider theme={this.state.theme}>
                    <GlobalStyles/>
                    <button id="toggle" style={{border:'none', background:'none', cursor:'pointer', width: '5vmin', height: '5vmin'}} onClick={this._toggle}>
                        {this.state.icon}
                    </button>
                </ThemeProvider>
            </div>
        )
    }
}

export default ToggleTheme;