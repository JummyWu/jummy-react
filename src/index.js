import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import Topbar from './topbar/topbar'
import Main from './main/main'
import Footer from './footer'
import simple_white_theme from './theme/simple_white'
import * as serviceWorker from './serviceWorker';

var theme = simple_white_theme

class Blog extends Component {
    render() {
        return(
            <MuiThemeProvider theme={theme}>
                <Topbar/>
                <Main/>
                <Footer/>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    // element,
    <Blog/>,
    document.getElementById('root'));

serviceWorker.unregister();
