import React, { useState, useEffect, useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useHistory } from "react-router-dom";
import FileBase from "react-file-base64";
import {
  Button,
  Typography,
  Paper,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

import { IdContext } from "../../context/idContext";

const Form = () => {
  const [currentId, setCurrentId] = useContext(IdContext);
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );

  const { subData } = useSelector((state) => state.subs);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    subReddit: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(
          currentId,
          { ...postData, name: user?.result?.name },
          history
        )
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }, history));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      subs: "",
      subReddit: "",
      selectedFile: "",
    });
  };

  if (!user?.result?.name) {
    return (
      <Container maxWidth="md">
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center" style={{ color: "white" }}>
            Please Sign In to create your own posts!!
          </Typography>
        </Paper>
      </Container>
    );
  }
  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" style={{ color: "white" }}>
            {currentId ? "Edit Your" : "Create A"} Post
          </Typography>
          <TextField
            className={classes.textField}
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          {/* <TextField
            name="sub"
            variant="outlined"
            label="Sub-Reddit"
            fullWidth
            value={postData.sub}
            onChange={(e) => setPostData({ ...postData, sub: e.target.value })}
          /> */}
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Sub-Reddit</InputLabel>
            <Select
              value={postData.subReddit}
              onChange={(e) =>
                setPostData({ ...postData, subReddit: e.target.value })
              }
              label="Sub-Reddit"
            >
              {subData?.map((sub) => (
                <MenuItem key={sub._id} value={sub.title}>
                  {sub.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={classes.fileInput} style={{ color: "white" }}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            // color="primary"
            size="large"
            type="submit"
            // fullWidth
          >
            Post
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            // color="secondary"
            size="large"
            onClick={clear}
            // fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
