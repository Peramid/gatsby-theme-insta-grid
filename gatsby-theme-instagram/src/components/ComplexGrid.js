/** @jsx jsx  */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import Card from "./Card";

const ComplexGrid = ({ instagramPosts }) => {
  return (
    <Fragment>
      {instagramPosts.map(post => (
        <Card post={post} />
      ))}
    </Fragment>
  );
};

export default ComplexGrid;
