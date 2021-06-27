import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  IconButton,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  makeStyles,
  CardMedia,
} from "@material-ui/core/";

import YoutubeSearchedForOutlinedIcon from "@material-ui/icons/YoutubeSearchedForOutlined";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  icon: {
    color: "#f44336",
  },
});

const BlogPreview = ({ blog }) => {
  const classes = useStyles();

  const contentPreview = () => {
    const newContent = blog.content.split(" ");
    const preview = [];
    for (let i = 0; i < 20; i++) {
      preview.push(newContent[i]);
    }
    return preview.join(" ");
  };

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/blogs/${blog.id}`}>
        <CardMedia
          className={classes.media}
          image={blog.img}
          title='Blog Header'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {blog.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {contentPreview()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton component={Link} to={`/blogs/${blog.id}`} aria-label='show'>
          <YoutubeSearchedForOutlinedIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogPreview;
