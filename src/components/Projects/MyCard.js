import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

function MyCard(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Card className={classes.root} elevation={7}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.details.imagelink}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.details.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.details.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='secondary'>
          <Link href={props.details.githubLink} target='_blank'>
            <GitHubIcon color='secondary'></GitHubIcon>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
export default MyCard;
