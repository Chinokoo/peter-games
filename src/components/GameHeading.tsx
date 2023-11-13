import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const peter = "Peter ";
const game = " Games";
const GameHeading = ({ gameQuery }: Props) => {
  const heading =
    peter +
    `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""}` +
    game;

  return (
    <Heading padding="5px" as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
