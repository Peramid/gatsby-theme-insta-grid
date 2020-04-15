/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { Global } from "@emotion/core";
import { Helmet } from "react-helmet";
import Header from "./Header";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      <Global
        styles={theme => ({
          // "*": {
          //   boxSizing: "border-box"
          // }
        })}
      />
      <Header />
      <main sx={{ my: 4, mx: "auto", maxWidth: 980, width: "90vw" }}>
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
