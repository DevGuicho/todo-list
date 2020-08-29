import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import "../assets/styles/components/Layout.css";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <section className="main">{props.children}</section>
      <Aside />
    </React.Fragment>
  );
};

export default Layout;
