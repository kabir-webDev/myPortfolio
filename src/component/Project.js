import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function Project({ project, img, alt }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className="someStyle">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={alt}
            height="170"
            image={img}
            title={alt}
          />
          <CardContent style={{ color: "red" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {project}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="add to favorites" className="love">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" className="git">
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
