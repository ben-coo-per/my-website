import { useState } from "react";
import Link from "next/link";
import { Box, Text, Image, Skeleton, SkeletonText } from "@chakra-ui/react";

function WorkCard({ project }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <Link href={`/${project.tag[0].name}/${project._id}`}>
      <a>
        <Box
          // borderWidth="1px"
          shadow="xl"
          bg="babyPowder"
          borderRadius="xl"
          overflow="hidden"
          _hover={{ m: -2, shadow: "2xl" }}
          p={2}
        >
          <Skeleton isLoaded={imageIsLoaded}>
            <Image
              onLoad={() => setImageIsLoaded(true)}
              borderRadius="lg"
              src={`https://images.takeshape.io/${project.imageGallery[0].image1.path}`}
              alt={project.imageAlt}
            />
          </Skeleton>
          <Box p="6">
            <Text textStyle="h4" align="center">
              {project.title}
            </Text>
            <Text textStyle="body" align="center">
              {project.date}
            </Text>
          </Box>
        </Box>
      </a>
    </Link>
  );
}

function SkeletonCard({ project }) {
  return (
    <Box
      // borderWidth="1px"
      shadow="xl"
      bg="babyPowder"
      borderRadius="xl"
      overflow="hidden"
      _hover={{ m: -2, shadow: "2xl" }}
      p={2}
    >
      <Skeleton>
        <Box h="400" w="full" />
      </Skeleton>
      <Box p="6">
        <SkeletonText noOfLines={2} spacing="4" />
      </Box>
    </Box>
  );
}

export { WorkCard, SkeletonCard };
