import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Grid, Paper, Chip, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Typography
        style={{ color: "#eee" }}
        align='center'
        variant='h3'
        color='textPrimary'
        id='skill'
        data-aos='zoom-in'>
        Skills
      </Typography>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={3} xs={12} data-aos='fade-up'>
        <Grid item md={3} xs={0}></Grid>
        <Grid item md={6} xs={12} spacing={3} className={classes.root}>
          <Chip color='secondary' icon={<CodeIcon />} label='  JAVA  ' />
          <Chip color='secondary' icon={<CodeIcon />} label='  C++  ' />
          <Chip color='secondary' icon={<CodeIcon />} label='JavaScript' />
          <Chip color='secondary' icon={<CodeIcon />} label='React JS' />
          <Chip color='secondary' icon={<CodeIcon />} label='Node JS' />
          <Chip color='secondary' icon={<CodeIcon />} label='ExpressJS' />
          <Chip color='secondary' icon={<CodeIcon />} label='MongoDB' />
          <Chip color='secondary' icon={<CodeIcon />} label='Firebase' />
          <Chip color='secondary' icon={<CodeIcon />} label='HTML' />
          <Chip color='secondary' icon={<CodeIcon />} label='CSS' />
          <Chip color='secondary' icon={<CodeIcon />} label='Adobe XD' />
          <Chip color='secondary' icon={<CodeIcon />} label='Photoshop' />
          <Chip color='secondary' icon={<CodeIcon />} label='Illustrator' />
          <Chip color='secondary' icon={<CodeIcon />} label='VFX Designing' />
        </Grid>
        <Grid item md={3} xs={0}></Grid>
      </Grid>
    </div>
  );
}

export default Skills;
