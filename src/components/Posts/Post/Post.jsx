import React, { useContext } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  // ButtonBase,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import EjectRoundedIcon from "@material-ui/icons/EjectRounded";
import EjectOutlinedIcon from "@material-ui/icons/EjectOutlined";

import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import { deletePost, likePost, dislikePost } from "../../../actions/posts";
import { IdContext } from "../../../context/idContext";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [currentId, setCurrentId] = useContext(IdContext);
  // const history = useHistory();

  const user = JSON.parse(localStorage.getItem("profile"));

  // const openPost = () => {
  //   history.push(`/posts/${post._id}`);
  // };

  const UpVote = () => {
    if (post.upvotes.length > 0) {
      return post.upvotes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <EjectRoundedIcon color="primary" />
        </>
      ) : (
        <>
          <EjectOutlinedIcon color="primary" />
        </>
      );
    }

    return (
      <>
        <EjectOutlinedIcon color="primary" />
      </>
    );
  };
  const DownVote = () => {
    if (post.downvotes.length > 0) {
      return post.downvotes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ArrowDropDownCircleIcon color="secondary" />
        </>
      ) : (
        <>
          <ArrowDropDownCircleOutlinedIcon color="secondary" />
        </>
      );
    }

    return (
      <>
        <ArrowDropDownCircleOutlinedIcon color="secondary" />
      </>
    );
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <Grid className={classes.mainContainer} container>
        <Grid className={classes.votes} item sm={12} md={1}>
          <CardActions className={classes.cardActions}>
            <div className={classes.updown}>
              <Button
                size="small"
                style={{ minWidth: "40px", marginLeft: "0px" }}
                className={!user?.result ? classes.button1 : classes.button}
                disabled={!user?.result}
                onClick={() => dispatch(likePost(post._id))}
              >
                {/* <ArrowUpwardIcon /> */}
                <UpVote />
              </Button>
              <Typography
                style={{
                  marginLeft: "0px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                variant="body1"
              >
                {post.upvotes.length - post.downvotes.length}
              </Typography>
              <Button
                size="small"
                style={{ minWidth: "40px", marginLeft: "0px" }}
                className={!user?.result ? classes.button1 : classes.button}
                disabled={!user?.result}
                onClick={() => dispatch(dislikePost(post._id))}
              >
                {/* <ArrowDownwardIcon /> */}
                <DownVote />
              </Button>
            </div>
            <div className={classes.userActions}>
              {(user?.result?.googleId === post?.creator ||
                user?.result?._id === post?.creator) && (
                <Button
                  size="small"
                  style={{ minWidth: "40px", marginLeft: "0px" }}
                  className={classes.button}
                  onClick={() => dispatch(deletePost(post._id))}
                >
                  <DeleteIcon
                    fontSize="small"
                    className={classes.buttonIcons}
                  />
                </Button>
              )}
              {(user?.result?.googleId === post?.creator ||
                user?.result?._id === post?.creator) && (
                <Button
                  style={{ color: "white", minWidth: "40px" }}
                  size="small"
                  onClick={() => setCurrentId(post._id)}
                  component={Link}
                  to="/posts/submit"
                >
                  {/* <MoreHorizIcon fontSize="default" /> */}
                </Button>
              )}
            </div>
          </CardActions>
        </Grid>
        <Grid item style={{ paddingLeft: "0px" }} sm={12} md={11}>
          <div style={{ display: "flex", padding: "5px 6px" }}>
            <Typography variant="body1" style={{}}>
              r/{post.subReddit}{" "}
            </Typography>
            <Typography variant="body2" className={classes.firstpart}>
              Posted By {post.name}
            </Typography>
            <Typography variant="body2" className={classes.firstpart}>
              {moment(post.createdAt).fromNow()}
            </Typography>
          </div>
          {/* <ButtonBase className={classes.cardAction} onClick={openPost}> */}
          <Typography className={classes.title} variant="h5">
            {post.title}
          </Typography>
          {post?.selectedFile && (
            <CardMedia
              className={classes.media}
              image={post.selectedFile}
              title={post.title}
            />
          )}
          {/* <div className={classes.details}>
              <Typography color="error" variant="body2">
                {post.tags.map((tag) => `#${tag} `)}
              </Typography>
            </div> */}
          {/* <Typography className={classes.title} variant="h5">
              {post.title}
            </Typography> */}
          <CardContent>
            <Typography
              className={classes.paragraph}
              variant="body2"
              component="p"
            >
              {post.message}
            </Typography>
          </CardContent>
          {/* </ButtonBase> */}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Post;
