/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
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
      <Header />
      <main sx={{ my: 4, mx: "auto", width: "90vw", maxWidth: "980px" }}>
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
