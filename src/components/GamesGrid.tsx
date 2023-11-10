import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {error && <Text>{error}</Text>}
        {games.map((game) => (
          <GameCardContainer>
            <GameCards key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
