import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow="hidden" borderRadius="14px" width="300px" height="350px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
