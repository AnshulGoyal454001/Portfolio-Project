import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyCard from "./MyCard";
import womenSafety from "../../assets/womenSafety.jpg";
import algoViz from "../../assets/algoViz.png";
import restApi from "../../assets/restApi.png";
import oAuth from "../../assets/oAuth.png";
import coronaTracker from "../../assets/coronaTracker.png";
import Chat from "../../assets/Chat.png";
import gameZone from "../../assets/gameZone.jpeg";
import watermark from "../../assets/watermark.png";
import vitGrade from "../../assets/vitGrade.jpg";

const useStyles = makeStyles((theme) => ({
  marginMaker: {
    marginTop: 100,
    marginBottm: 200,
    marginLeft: 100,
    marginRight: 100,
  },
}));

var details = [
  {
    title: "Women Safety Device",
    imagelink: womenSafety,
    content:
      "A women in danger can call for help to people nearby, by just a single tap on her phone",
    githubLink: "https://github.com/AnshulGoyal454001/Women-Safety-Mechanism",
  },
  {
    title: "Algorithm Visualizer",
    imagelink: algoViz,
    content:
      "Various sorting algorithms are visualized on a PIC microcontroller using C programming language",
    githubLink:
      "https://github.com/AnshulGoyal454001/Sorting-Algorithm-Visualizer-Using-PIC-Microcontroller",
  },
  {
    title: "REST API",
    imagelink: restApi,
    content:
      "Implementation of a Friend's distance website, REST API using Node.js, Express.js and MongoDB.",
    githubLink:
      "https://github.com/AnshulGoyal454001/REST-API--Friend-s-Distance",
  },
  {
    title: "OAuth SignUp/SignIn",
    imagelink: oAuth,
    content:
      "Implementation of Google+ OAuth authentication using Passport.js with MongoDB as database",
    githubLink: "https://github.com/AnshulGoyal454001/OAuth-SignUp-SignIn",
  },
  {
    title: "Corona Tracker",
    imagelink: coronaTracker,
    content:
      "This React.js project implements a coronavirus case tracker, world and country wise.",
    githubLink: "https://github.com/AnshulGoyal454001/Corona-Tracker",
  },
  {
    title: "Chat using Socket.io",
    imagelink: Chat,
    content:
      "This Project implements a Real time chat application using Websockets(Socket.io)",
    githubLink: "https://github.com/AnshulGoyal454001/Chat-using-Socket.io",
  },
  {
    title: "Game Review",
    imagelink: gameZone,
    content:
      "This React Native Project is a Game Review Application, where users can give their reviews of a game",
    githubLink:
      "https://github.com/AnshulGoyal454001/GameReviews-App-in-React-Native",
  },
  {
    title: "Song Watermark",
    imagelink: watermark,
    content:
      "This is a MATLAB based software to copyright songs with the help of a watermark",
    githubLink: "https://github.com/AnshulGoyal454001/SongCopyright",
  },
  {
    title: "VIT Grade Calculator",
    imagelink: vitGrade,
    content:
      "This website can be used by VIT students to calculate their grades in a semester",
    githubLink: "https://github.com/AnshulGoyal454001/Grade-Calculator",
  },
];
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Divider className={classes.marginMaker} data-aos='fade-up' />
      <br></br>
      <br></br>
      <br></br>
      <Grid xs={12} className={{ marginTop: 20 }}>
        <Typography
          style={{ color: "#eee" }}
          align='center'
          variant='h3'
          color='textPrimary'
          id='Projects'
          data-aos='zoom-in'>
          Projects
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <Grid container direction='row' justify='center' alignItems='center'>
          <div data-aos='fade-up'>
            <MyCard details={details[0]} />
          </div>
          <div data-aos='fade-up'>
            <MyCard details={details[1]} />
          </div>
          <div data-aos='fade-up'>
            <MyCard details={details[2]} />
          </div>
          <div data-aos='fade-up'>
            <MyCard details={details[3]} />
          </div>
          <div data-aos='fade-up'>
            <MyCard details={details[4]} />
          </div>
          <div data-aos='fade-up'>
            <MyCard details={details[5]} />
          </div>
          <div data-aos='fade-up'>
            <MyCard details={details[6]} />
          </div>
          <div data-aos='fade-up'>
            <MyCard details={details[7]} />
          </div>
          <div data-aos='fade-up'>
            <MyCard details={details[8]} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
