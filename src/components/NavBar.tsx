import { HStack, Image, Text } from "@chakra-ui/react";
import gamify from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={gamify} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
