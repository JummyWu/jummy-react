import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core';
import Topbar from './topbar/topbar'
import Main from './main'
import Footer from './footer'
import simple_white_theme from './theme/simple_white'
import * as serviceWorker from './serviceWorker';

var theme = simple_white_theme

class Blog extends Component {
    render() {
        return(
            <Router>
                <MuiThemeProvider theme={theme}>
                    <Topbar/>
                    <Main/>
                    <Footer/>
                </MuiThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(
    // element,
    <Blog/>,
    document.getElementById('root'));

serviceWorker.unregister();
