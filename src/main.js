import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { withStyles, Grid } from '@material-ui/core';

import { FrameGrid } from './common/components'
import ArticleList from './blog/article_list'
import ArticleDetail from './blog/article_detail'


const mainStyle = theme => ({
  root: {
    margin: '25px 0px',
    '&>div': {
      // margin: '0 8px',
      padding: '0 8px',
    }
  },
  paper: {
    paddingBottom: 8,
    marginBottom: 8,
  },
  '@global': theme.global,
})


class Main extends Component {
  render() {
    let { classes } = this.props
    return (
      <FrameGrid container component={'main'}>
        <Grid item md={12}>
          <ArticleList></ArticleList>
          {/* <ArticleDetail /> */}
          {/* <Route exact path="/" component={ArticleList} /> */}
          {/* <Route path="/article/:id" component={ArticleDetail} /> */}
        </Grid>
      </FrameGrid>
    );
  }
}


Main = withStyles(mainStyle)(Main)


export default Main