import React from "react";
import LinkBtn from "../common/LinkBtn";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Home from "../Home";

const About = (props) => {
  console.log(props);
  let { match } = props;
  return (
    <div style={{ marginTop: "" }}>
      <LinkBtn to={`${match.url}`} label="About" />
      <LinkBtn to={`${match.url}/contact`} label="contact" />

      <Switch>
        <Route path={`${match.path}/`} exact component={Home} />
        <Route path={`${match.path}/contact`} component={Contact} />
      </Switch>
    </div>
  );
};

export default About;
