import "./App.css";
import React, { useState } from "react";

import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import PostDetails from "./components/PostDetails/PostDetails";

import CreateSub from "./components/CreateSub/CreateSub";
import SubHome from "./components/SubHome/SubHome";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [currentId, setCurrentId] = useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route
            path="/posts"
            exact
            component={() => (
              <Home currentId={currentId} setCurrentId={setCurrentId} />
            )}
          />
          <Route path="/posts/search" exact component={Home} />
          <Route
            path="/posts/submit"
            exact
            component={() => (
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            )}
          />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route exact path="/sub" component={SubHome} />
          <Route exact path="/sub/create" component={CreateSub} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
