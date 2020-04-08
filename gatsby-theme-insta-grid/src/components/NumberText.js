/** @jsx jsx  */
import { jsx } from "theme-ui";

const NumberText = ({ children, color }) => {
  return (
    <p
      sx={{
        pl: 1,
        pr: 2,
        m: "0",
        fontSize: "0.9rem",
        fontWeight: "bold",
        color
      }}
    >
      {children}
    </p>
  );
};

export default NumberText;
