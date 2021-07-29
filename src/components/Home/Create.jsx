import React from "react";

import { Paper, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Create = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.redditHome} elevation={6}>
      <div className={classes.headerImage}></div>
      <div
        className={classes.create}
        style={{ transform: "translateY(-23px)" }}
      >
        <div style={{ display: "flex" }}>
          <span
            style={{
              height: "65px",
              width: "45px",
              background:
                "rgba(0, 0, 0, 0) url('https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png') no-repeat scroll 0% 0% / 40px 68px",
            }}
          ></span>
          <Typography
            style={{
              color: "#d7dadc",
              display: "flex",
              alignItems: "flex-end",
            }}
            variant="h6"
          >
            Home
          </Typography>
        </div>
        <Typography
          style={{ color: "white", margin: "10px 0" }}
          variant="body2"
        >
          Your personal BareBones frontpage. Come here to check in with your
          favorite communities.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/posts/submit"
          fullWidth
          style={{ marginBottom: "10px" }}
        >
          Create New Post
        </Button>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/sub/create"
          fullWidth
        >
          Create New Community
        </Button>
      </div>
    </Paper>
  );
};

export default Create;
