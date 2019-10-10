import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';

import { FrameGrid } from '../common/components'
import ArticleList from './article_list'
import SideBar from './side_bar'


const mainStyle = theme => ({
  root: {
    marginTop: 16,
    marginBottom: 16,
    '&>div': {
      // margin: '0 8px',
      padding: '0 8px',
    }
  },
  paper: {
    width: '100%'
  },
  '@global': theme.global,
})


class Main extends Component {
  render() {
    let { classes } = this.props
    return (
      <FrameGrid container component={'main'} className={classes.root}>
        <Grid item md={8}>
          <ArticleList></ArticleList>
        </Grid>
        <Grid item md={4}>
          <SideBar />
        </Grid>
      </FrameGrid>
    );
  }
}


Main = withStyles(mainStyle)(Main)


export default Main