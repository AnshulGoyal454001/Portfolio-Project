import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    marginLeft: 10,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position='static' alignItems='center' style={{background:"crimson"}}>
      <Toolbar variant='dense' className={classes.root}>
        <Link
          data-easing='easeInOutQuad'
          href='#skill'
          color='inherit'
          className={classes.menuItem}
          underline='none'>
          Skills
        </Link>

        <Link
          data-easing='easeInOutQuad'
          href='#Projects'
          color='inherit'
          className={classes.menuItem}
          underline='none'>
          Projects
        </Link>

        <Link
          data-easing='easeInOutQuad'
          href='#work'
          color='inherit'
          className={classes.menuItem}
          underline='none'>
          Work Experience
        </Link>

        <Link
          data-easing='easeInOutQuad'
          href='#Organization'
          color='inherit'
          className={classes.menuItem}
          underline='none'>
          Organizations
        </Link>

        <Link
          data-easing='easeInOutQuad'
          href='#Contact'
          color='inherit'
          className={classes.menuItem}
          underline='none'>
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
