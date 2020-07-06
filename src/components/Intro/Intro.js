import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import anshul from "../../assets/anshul.jpg";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    height: 100,
  },
  paper1: {
    height: 200,
    width: 200,
    paddingLeft: 100,
  },
  anshulImg: {
    height: window.innerWidth > 768 ? 500 : 350,
    width: window.innerWidth > 768 ? 500 : 350,
    borderRadius: 200,
    marginTop: 20,
  },
  introText: {
    marginTop: 60,
  },
  details: {
    paddingTop: 5,
    marginLeft: 10,
  },
  detailsFirst: {
    height: 30,
  },
  marginMaker: {
    marginBottom: 20,
    backgroundColor: "#eee",
  },
  marginMaker2: {
    marginTop: 20,
  },
}));

function Intro() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} xs={12}>
        <Grid
          md={6}
          xs={12}
          container
          direction='row'
          justify='center'
          alignItems='center'>
          <img
            src={anshul}
            className={classes.anshulImg}
            data-aos='fade-right'
          />
        </Grid>
        <Grid item md={6} xs={12} data-aos='fade-left'>
          <Typography
            style={{ color: "crimson" }}
            className={classes.introText}
            variant='h3'
            color='#inherit'>
            <strong>Hi, I'm Anshul</strong>
          </Typography>
          <Typography
            variant='subtitle1'
            color='textPrimary'
            style={{ color: "#ddd" }}>
            A curious problem solver with a passion to solve real-world problems
            and impact millions of lives. I am a keen learner and always looking
            forward to putting my hands on new technologies.
          </Typography>

          <Divider className={classes.marginMaker} />
          <div style={{ color: "#ddd" }}>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='center'>
              <PhoneAndroidIcon />
              <Typography className={classes.details} gutterBottom>
                9131415939
              </Typography>
            </Grid>

            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='center'>
              <MailIcon />
              <Typography className={classes.details} gutterBottom>
                anshulgoyal454001@gmail.com
              </Typography>
            </Grid>

            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='center'>
              <ArtTrackIcon />
              <Typography className={classes.details} gutterBottom>
                behance.net/anshulgoyae5d2
              </Typography>
            </Grid>

            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='center'>
              <LinkedInIcon />
              <Typography className={classes.details} gutterBottom>
                linkedin.com/in/anshul-goyal-247821156
              </Typography>
            </Grid>

            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='center'>
              <GitHubIcon />
              <Typography className={classes.details} gutterBottom>
                github.com/AnshulGoyal454001
              </Typography>
            </Grid>

            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='center'>
              <FacebookIcon />
              <Typography className={classes.details} gutterBottom>
                facebook.com/anshul.goyal.1800721
              </Typography>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.marginMaker2} data-aos='zoom-in' />
    </div>
  );
}

export default Intro;
