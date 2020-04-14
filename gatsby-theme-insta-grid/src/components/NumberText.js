/** @jsx jsx  */
import { jsx, Text } from "theme-ui";

const NumberText = ({ children, color }) => {
  return (
    <Text
      sx={{
        variant: "text.numbers",
        color
      }}
    >
      {children}
    </Text>
  );
};

export default NumberText;
