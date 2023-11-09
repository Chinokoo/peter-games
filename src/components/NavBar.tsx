import { HStack, Image, Text } from "@chakra-ui/react";
import gamify from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={gamify} boxSize="60px" />
        <Text fontSize={{ sm: "1xl", md: "2xl", lg: "4xl" }} as="b">
          Peter Games
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
