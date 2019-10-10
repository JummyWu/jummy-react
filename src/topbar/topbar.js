import React, {Component} from 'react'
import { withStyles, AppBar, Hidden, Grid } from '@material-ui/core';

import { FrameGrid } from '../common/components';

import NavList from './navlist'
import Toolbar from './toolbar'


const topbar_style = {
    root: {
        display: 'block',
    }
}

class Topbar extends Component {
    render() {
        return (
            <AppBar classes={this.props.classes} position={'relative'} style={{color: "#f4f5f7"}}>
                <FrameGrid container>
                    <Grid container alignItems={'center'} style={{margin: '0 16px', flexFlow: 'row nowrap' }}>
                        <Hidden mdUp implementation={'css'}>
                            <i className="fa fa-bars fa-lg" />
                        </Hidden>
                        <a href={'/'} style={{ margin: 'auto 2rem', fontSize: '1.75rem' }}>
                            Jummy
                        </a>
                        <Toolbar/>
                        <NavList/>
                    </Grid>
                </FrameGrid>
            </AppBar>
        )
    }
}

export default withStyles (topbar_style) (Topbar);