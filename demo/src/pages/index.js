import React from "react";
import Layout from "../components/Layout";
import { InstaGrid } from "gatsby-theme-insta-grid";

const Index = () => {
  return (
    <Layout>
      <h1>Check out my Instagram!</h1>
      <InstaGrid gridType="complex"></InstaGrid>
    </Layout>
  );
};

export default Index;
