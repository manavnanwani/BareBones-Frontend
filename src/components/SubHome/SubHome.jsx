import React from "react";

import { Grow, Container, Typography, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const SubHome = () => {
  const classes = useStyles();
  const { subData } = useSelector((state) => state.subs);

  return (
    <Grow in>
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center" style={{ color: "white" }}>
            All Communities
          </Typography>
        </Paper>
        {subData?.map((sub) => (
          <Paper className={classes.paper} key={sub._id}>
            <Typography variant="h6" style={{ color: "white" }}>
              Name: {sub.title}
            </Typography>
            <Typography variant="h6" style={{ color: "white" }}>
              Created By:{sub.name}
            </Typography>
            <Typography variant="h6" style={{ color: "white" }}>
              No of Posts:{sub.posts.length}
            </Typography>
            <Typography variant="h6" style={{ color: "white" }}>
              Followers: {sub.followers.length}
            </Typography>
          </Paper>
        ))}
        <Typography variant="body" align="center" style={{ color: "white" }}>
          Still in Production!!
        </Typography>
      </Container>
    </Grow>
  );
};

export default SubHome;
