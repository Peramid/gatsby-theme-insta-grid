/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { Global } from "@emotion/core";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={theme => ({
          "*": {
            boxSizing: "border-box"
          },
          body: {
            fontFamily: theme.fonts.body,
            fontSize: 20,
            margin: 0
          }
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