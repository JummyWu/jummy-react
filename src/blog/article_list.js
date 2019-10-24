import React from 'react'
import { makeStyles } from '@material-ui/core'

const MainBar = makeStyles(theme =>({
  topImage: {
    height: "60%",
    backgroundSize: "cover",
  }
}));

function Article() {
  const classes = MainBar();
  return(
    <div>
    <div className={classes.topImage} style={{backgroundImage: `url(${"https://puui.qpic.cn/fans_admin/0/3_1599777765_1556984209342/0"})`}}>
    </div>
    <div>
      <span >你好</span>
    </div>
    </div>
  )
}

export default Article