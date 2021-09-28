import React, { useState, useEffect } from "react";

import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  TextField,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";

import decode from "jwt-decode";
import useStyles from "./styles";

import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";
import { fetchSubs } from "../../actions/sub";
import logo from "../../images/logo.png";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(localStorage.getItem("profile"));
  const [search, setSearch] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchPost();
    }
  };
  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }));
      history.push(`/posts/search?searchQuery=${search || "none"}`);
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    dispatch(fetchSubs());
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img
          src={logo}
          alt=""
          style={{ width: "44px" }}
          className={classes.logoImage}
        />
        <Typography className={classes.logo} variant="h6">
          BareBones
        </Typography>
      </Link>
      <TextField
        className={classes.searchButton}
        name="search"
        variant="outlined"
        label="Search"
        style={{ minWidth: "450px" }}
        onKeyPress={handleKeyPress}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <div className={classes.userInfo}>
              <Avatar
                className={classes.purple}
                // src={user.result.imageURL}
                src="https://styles.redditmedia.com/t5_23lni3/styles/profileIcon_snoo38b947d5-0f17-47f4-9cf0-f106f40ce514-headshot.png?width=256&height=256&crop=256:256,smart&s=77885e690ff32a5fe04b5a0e6e610670ed70aa98"
                alt={user.result.name}
              >
                {/* {user.result.name.charAt(0)} */}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
            </div>
            <Button
              variant="contained"
              className={classes.button}
              onClick={logout}
            >
              LOGOUT
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            className={classes.button}
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
