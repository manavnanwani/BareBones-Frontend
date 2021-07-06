import React from "react";
import { Container, Grow, Grid, Paper, Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Posts from "../Posts/Posts";
import Pagination from "../Pagination";
import useStyles from "./styles";

import Community from "./Community";
import Create from "./Create";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const query = useQuery();
  var { subData } = useSelector((state) => state.subs);

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  return (
    <Grow in>
      <Container maxWidth="md">
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={8} md={8}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/posts/submit"
              fullWidth
              style={{ marginBottom: "20px" }}
            >
              Create New Post
            </Button>
            <Posts setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <Community subData={subData?.slice(0, 5)} />
            {!searchQuery && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
            <Create />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
