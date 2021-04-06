import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import Head from "next/head";
import { useRouter } from "next/router";
import { ProjectPage } from "../../src/components/shared/layout";
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
} from "@chakra-ui/react";
import { getProject } from "../api/getProject";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function initialState(args) {
  return {
    response: null,
    error: null,
    isLoading: true,
    ...args,
  };
}

export default function AboutPage() {
  const router = useRouter();
  const [state, setState] = useState(() => initialState());

  if (!router) {
    return (
      <div>
        <Head>
          <title>Loading...</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProjectPage
          pageTitle={router.query.projectID}
          backURL="/work"
          isLoading
        >
          <Text textStyle="body">{}</Text>
        </ProjectPage>
      </div>
    );
  }

  useEffect(() => {
    // Fetch Post from DB
    const fetchData = async () => {
      try {
        const res = await getProject(router.query.projectID);

        if (res && !res.project) {
          setState(
            initialState({
              response: res,
              isLoading: true,
            })
          );
        } else if (res) {
          setState(
            initialState({
              response: res,
              isLoading: false,
            })
          );
        } else {
          setState(
            initialState({
              error: res,
              isLoading: false,
            })
          );
        }
      } catch (error) {
        setState(
          initialState({
            error: {
              error: error.message,
            },
            isLoading: false,
          })
        );
      }
    };

    fetchData();
  }, [router]);

  if (state.isLoading) {
    return (
      <div>
        <Head>
          <title>Loading...</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProjectPage
          pageTitle={router.query.projectID}
          backURL="/work"
          isLoading
        ></ProjectPage>
      </div>
    );
  }

  if (state.error) {
    return (
      <>
        <Head>
          <title>Error</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ProjectPage pageTitle="404" backURL="/work" error />
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>{state.response.project.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectPage project={state.response.project} backURL="/work">
        <ImageCarousel images={state.response.project.imageGallery} />

        <ReactMarkdown
          renderers={ChakraUIRenderer()}
          source={state.response.project.markdown}
          escapeHtml={true}
        />
      </ProjectPage>
    </div>
  );
}

function ImageCarousel({ images }) {
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
        <Skeleton isLoaded={!slideIsLoading}>
          <Image
            onLoad={() => setSlideIsLoading(false)}
            borderRadius="lg"
            // maxH="50vh"
            // minH="30vh"
            h={{ base: "200px", sm: "400px" }}
            src={`https://images.takeshape.io/${img.path}`}
            alt={img.description}
          />
        </Skeleton>
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
