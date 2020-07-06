import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Grid, Paper, Divider, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 40,
    paddingRight: 10,
    paddingBottom: 10,
    margin: 10,
  },
  gridCSS: {
    marginBottom: 40,
  },
  marginMaker: {
    marginTop: 100,
    marginBottm: 200,
    marginLeft: 100,
    marginRight: 100,
  },
}));

function WorkExp() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const classes = useStyles();
  return (
    <div style={{ maxWidth: "100%" }}>
      <Grid item xs={12}>
        <Divider className={classes.marginMaker} />
        <br></br>
        <br></br>
        <br></br>

        <Typography
          style={{ color: "#eee" }}
          align='center'
          variant='h3'
          color='textPrimary'
          id='work'
          data-aos='zoom-in'>
          Work Experience
        </Typography>
      </Grid>
      <br></br>
      <br></br>
      <br></br>

      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid
          xs={12}
          md={8}
          alignItem='center'
          className={classes.gridCSS}
          data-aos='fade-up'>
          <Paper className={classes.root} elevation={7}>
            <br></br>
            <br></br>

            <Typography variant='h4'>Internship</Typography>
            <Typography variant='h6'>Pantech Solutions</Typography>
            <Typography color='textPrimary'>06/2019 – 07/2019</Typography>
            <Typography variant='h6'>Embedded systems designer</Typography>
            <Typography variant='textPrimary'>
              I worked on Embedded system projects using ARM7,STM32, 8051
              microcontrollers, Arduino and Raspberry pi. I worked on various
              IoT projects while I was working here.
            </Typography>

            <br></br>
            <br></br>
          </Paper>
        </Grid>
        <Grid
          xs={12}
          md={8}
          alignItem='center'
          className={classes.gridCSS}
          data-aos='fade-up'>
          <Card className={classes.root} elevation={7}>
            <br></br>
            <br></br>

            <Typography variant='h4'>Internship</Typography>
            <Typography variant='h6'>
              Pietra Dura Creative Management
            </Typography>
            <Typography color='textPrimary'>05/2019 – 07/2019</Typography>
            <Typography variant='h6'>Vector Designer</Typography>
            <Typography variant='textPrimary'>
              I worked as a vector/sticker designer for the company, I used
              Adobe Illustrator to design vectors and get the vectors approved
              from my head. And perform the necessary correction in the vectors
            </Typography>
            <br></br>
            <br></br>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default WorkExp;
