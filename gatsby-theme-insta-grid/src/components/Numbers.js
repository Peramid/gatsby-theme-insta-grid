/** @jsx jsx  */
import { jsx, Text } from "theme-ui";

const Numbers = ({ children, color }) => {
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

export default Numbers;
