import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" overflow="hidden" borderRadius="14px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText skeletonHeight="2" noOfLines={4} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
