/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import Footer from "./Footer";
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
      <Hero />
      <main sx={{ my: 4, mx: "auto", width: "90vw", maxWidth: "980px" }}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
