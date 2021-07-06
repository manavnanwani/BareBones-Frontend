import React from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Community = ({ subData }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.communities} elevation={6}>
      <div
        style={{
          display: "flex",
          height: "40px",
          padding: "5px 10px",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
          background:
            "url('https://i.ibb.co/KXvk6KC/banner.png') no-repeat scroll 0% 0% / 100% 100%",
        }}
      >
        <Typography
          style={{ color: "white", display: "flex", alignItems: "end" }}
          variant="body1"
        >
          Top 5 Communities
        </Typography>
      </div>
      <div>
        {subData?.map((sub) => (
          <Grid
            key={sub._id}
            style={{
              borderTop: "1px solid rgba(255,255,255,0.3",
              padding: "10px",
            }}
            container
          >
            <Grid item sm={2}>
              <Typography variant="body1" style={{ color: "#d7dadc" }}>
                {subData.indexOf(sub) + 1}
              </Typography>
            </Grid>
            <Grid item sm={10}>
              <Typography variant="body1" style={{ color: "white" }}>
                r/{sub.title}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </div>
      <div style={{ padding: "10px" }}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          to="/sub"
        >
          View All
        </Button>
      </div>
    </Paper>
  );
};

export default Community;
