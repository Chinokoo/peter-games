import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import AsideSkeleton from "./AsideSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;
  return (
    <>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <List key={skeleton} paddingY="5px">
              <AsideSkeleton />
            </List>
          ))}
        {data.map((genre) => (
          <List key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </List>
        ))}
      </List>
    </>
  );
};

export default GenreList;
