import React from "react";
import { InstaGrid } from "@melanienolan/gatsby-theme-insta-grid";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <Styled.h2>Oh hey!</Styled.h2>
    <p>
      If you want to add a grid of Instagram images to your Gatsby site, you're
      in the right place.
    </p>
    <p>
      Gatsby Theme Insta Grid gives you a customisable grid component to easily
      add a collection of images from either an Instagram account or hashtag to
      your site.
    </p>
    <p>
      Check out the docs{" "}
      <Styled.a href="https://github.com/melanienolan/gatsby-theme-insta-grid/">
        here
      </Styled.a>
      .
    </p>
    <InstaGrid />
    <Styled.h2>And this is the Complex Grid</Styled.h2>
    <InstaGrid cardType="complex" />
  </Layout>
);
