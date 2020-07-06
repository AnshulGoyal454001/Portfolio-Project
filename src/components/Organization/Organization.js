import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Grid, Paper, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OCard from "./OCard";
import OCard2 from "./OCard2";

const useStyles = makeStyles((theme) => ({
  marginMaker: {
    marginTop: 100,
    marginBottm: 200,
    marginLeft: 100,
    marginRight: 100,
  },
}));

function Organization() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Grid xs={12}>
        <Divider className={classes.marginMaker} />
        <br></br>
        <br></br>
        <br></br>
        <Typography
          style={{ color: "#eee" }}
          align='center'
          variant='h3'
          color='textPrimary'
          id='Organization'
          data-aos='zoom-in'>
          Organizations
        </Typography>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item data-aos='fade-up'>
          <OCard />
        </Grid>
        <Grid item data-aos='fade-up'>
          <OCard2 />
        </Grid>
      </Grid>
    </div>
  );
}

export default Organization;
