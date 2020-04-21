import React from "react";
import { InstaGrid } from "@melanienolan/gatsby-theme-insta-grid";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";

export default () => (
  <Layout>
    <Styled.h2>Oh hey!</Styled.h2>
    <Styled.p>
      If you want to add a grid of Instagram images to your Gatsby site, you're
      in the right place.
    </Styled.p>
    <Styled.p>
      Gatsby Theme Insta Grid gives you a customisable grid component to easily
      add a collection of images from either an Instagram account or hashtag to
      your site.
    </Styled.p>
    <Styled.p>
      Check out the docs{" "}
      <Styled.a href="https://github.com/melanienolan/gatsby-theme-insta-grid/">
        here
      </Styled.a>
      .
    </Styled.p>
    <Spacer space={"1rem"} />
    <Styled.h2>You can add a basic grid:</Styled.h2>
    <InstaGrid />
    <Spacer space={"1rem"} />
    <Styled.h2>Or a complex grid:</Styled.h2>
    <InstaGrid cardType="complex" />
  </Layout>
);
