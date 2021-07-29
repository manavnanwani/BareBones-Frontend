import React, { useState } from "react";

import { Button, Typography, Paper, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { createSub } from "../../actions/sub.js";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const CreateSub = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [subData, setSubData] = useState({ name: "", title: "" });

  const clear = () => {
    setSubData({
      title: "",
      name: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSub({ ...subData, name: user?.result?.name }, history));
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center" style={{ color: "white" }}>
            Please Sign In to Create A New Community!!
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" style={{ color: "white" }}>
            Create a new community
          </Typography>
          <TextField
            className={classes.textField}
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={subData.title}
            onChange={(e) => setSubData({ ...subData, title: e.target.value })}
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            size="large"
            type="submit"
          >
            Create
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            size="large"
            onClick={clear}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateSub;
