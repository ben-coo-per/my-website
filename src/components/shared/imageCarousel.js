import { useState } from "react";

import {
  Box,
  Center,
  Container,
  Image,
  Text,
  Skeleton,
  Button,
  Stack,
  Circle,
  Fade,
  IconButton,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ImageCarousel({ images }) {
  const [step, setStep] = useState(0);
  const [slideIsLoading, setSlideIsLoading] = useState(true);

  function handleForward() {
    setSlideIsLoading(true);
    if (step + 1 > images.length - 1) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  }
  function handleBackward() {
    setSlideIsLoading(true);
    if (step - 1 < 0) {
      setStep(images.length - 1);
    } else {
      setStep(step - 1);
    }
  }
  function handleSelect(i) {
    setSlideIsLoading(true);
    setStep(i);
  }

  const Slide = (image) => {
    const img = image.image.image;

    return (
      <Center bg="princeGray" borderRadius="lg">
        <Stack direction="column" justify="center">
          <Skeleton isLoaded={!slideIsLoading} align="center">
            <Image
              onLoad={() => setSlideIsLoading(false)}
              borderRadius="lg"
              // maxH="50vh"
              // minH="30vh"
              h={{ base: "180px", sm: "225px", md: "325px", lg: "380px" }}
              src={`https://images.takeshape.io/${img.path}`}
              alt={img.description}
            />
          </Skeleton>
          <Text align="center" textStyle="caption">
            {img.description}
          </Text>
        </Stack>
      </Center>
    );
  };

  const carouselSlides = images.map((image, i) => {
    if (image.image) {
      return (
        <Fade key={i} in={step == i}>
          <Slide image={image} />
        </Fade>
      );
    } else {
      return <Box></Box>;
    }
  });

  return (
    <Box>
      <Stack direction="column">
        {carouselSlides[step]}
        <Stack direction="row" spacing={1} justify="center" align="center">
          <IconButton variant="link" onClick={handleBackward}>
            <Icon as={HiChevronLeft} />
          </IconButton>
          {images.map((image, i) => {
            if (step === i) {
              return (
                <Circle
                  key={i}
                  name={i}
                  onClick={() => handleSelect(i)}
                  _hover={{ cursor: "pointer" }}
                  bg="queenBlue"
                  size={2}
                />
              );
            }
            return (
              <Circle
                key={i}
                name={i}
                onClick={() => handleSelect(i)}
                _hover={{ cursor: "pointer" }}
                bg="princeGray"
                border="1px"
                borderColor="queenBlue"
                size={2}
              />
            );
          })}
          <IconButton variant="link" onClick={handleForward}>
            <Icon as={HiChevronRight} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
