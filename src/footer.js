import React, {Component} from 'react'
import { withStyles, Grid } from '@material-ui/core';

const footerStyle = theme => ({
    root: {
      background: theme.palette.primary.main,
      borderTop: '1px solid #eee',
      padding: 20,
      color: theme.palette.text.hint,
      fontSize: '0.8rem',
      '& a': {
        color: theme.palette.text.hint,
        fontSize: '0.8rem',
      }
    }
  })

  class Footer extends Component {
      render() {
          return (
              <Grid container component={'footer'} direction={'column'}
              alignItems={'center'} className={this.props.classes.root}>
              <div>@ 2018 Jummy</div>
              </Grid>
          )
      }
  }

export default withStyles(footerStyle)(Footer)