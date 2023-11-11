import {
  Card,
  CardBody,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const AsideSkeleton = () => {
  return (
    <Card paddingX={3}>
      <HStack>
        <SkeletonCircle size="10" />
        <CardBody>
          <SkeletonText noOfLines={1} spacing="1" />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default AsideSkeleton;
