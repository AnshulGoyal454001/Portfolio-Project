import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import WorkExp from "./components/WorkExp/WorkExp";
import Organization from "./components/Organization/Organization";
import Contact from "./components/Contact/Contact";
import Particles from "react-particles-js";

function App() {
  return (
    <div>
      {/* <Particles
        height='100em'
        width='100em'
        convasClassName={{
          position: "absolute",
        }}
        params={{
          particles: {
            color: {
              value: "#ffff",
            },
            numbers: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "crimson",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      /> */}

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}>
        <NavBar />
        <Intro />
        <Skills />
        <Grid>
          <Projects />
        </Grid>

        <WorkExp />
        <Organization />
        <Contact />
      </div>
    </div>
  );
}

export default App;
