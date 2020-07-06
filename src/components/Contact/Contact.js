import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Grid,
  Card,
  Divider,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

var messageTemp = window.innerWidth > 900 ? 600 : 250;
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    margin: 20,
    width: messageTemp,
  },
  Bottom: {
    marginBottom: 50,
    marginTop: 100,
  },
  marginMaker: {
    marginTop: 100,
    marginBottm: 200,
    marginLeft: 100,
    marginRight: 100,
  },
  contactCard: {
    padding: 10,
    paddingRight: 40,
  },
}));

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const Nexmo = require("nexmo");
    const nexmo = new Nexmo({
      apiKey: "b5b8b298",
      apiSecret: "7dlD77kOibsNrbvY",
    });

    const from = "Vonage APIs";
    const to = "919131415939";
    const text = `${name} want's to say: ${message}, reply to ${email}`;

    nexmo.message.sendSms(from, to, text);
    alert("Message sent to Anshul");
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const classes = useStyles();
  return (
    <div>
      <Divider className={classes.marginMaker} />
      <br></br>
      <br></br>
      <br></br>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            style={{ color: "#eee" }}
            align='center'
            variant='h3'
            color='textPrimary'
            id='Contact'>
            Contact Me
          </Typography>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Grid>

      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        data-aos='fade-up'>
        <Grid>
          <Card className={classes.contactCard}>
            <form
              className={classes.root}
              noValidate
              autoComplete='off'
              onSubmit={sendMessage}>
              <TextField
                color='secondary'
                id='outlined-basic'
                label='Name'
                variant='outlined'
                className={classes.root}
                value={name}
                onChange={handleNameChange}
              />
              <br></br>
              <TextField
                color='secondary'
                id='outlined-basic'
                label='Email'
                variant='outlined'
                className={classes.root}
                value={email}
                onChange={handleEmailChange}
              />
              <br></br>
              <TextField
                color='secondary'
                id='outlined-basic'
                label='Message'
                variant='outlined'
                className={classes.root}
                multiline
                rows={4}
                value={message}
                onChange={handleMessageChange}
              />
              <br></br>
              <Button
                style={{ background: "crimson" }}
                variant='contained'
                color='secondary'
                className={classes.root}
                endIcon={<SendIcon />}
                type='submit'
                value='Submit'>
                Send Message
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
      <Divider className={classes.Bottom} />
    </div>
  );
}

export default Contact;
