import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { getBio } from "./api/getBio";
import { Header } from "../src/components/pageHeader";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import {
  Box,
  // Image,
  Text,
  Container,
  SimpleGrid,
  Center,
  Skeleton,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Footer from "../src/components/footer";

export default function AboutPage({ bio }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const isSmall = useBreakpointValue({ base: true, md: false });

  const myLoader = ({ src, width, quality }) => {
    return `https://images.takeshape.io/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header pageTitle="about" backURL="/" />
      <Container maxW="container.xl" pt={16} minH="100vh">
        <Center>
          <Stack
            direction={{ base: "column", md: "row-reverse" }}
            align={{ base: "center", md: "left" }}
            pt={3}
          >
            {isSmall && (
              <Text align="center" textStyle="h4">
                about me
              </Text>
            )}
            <Box h="60vh" w={550}>
              <Skeleton isLoaded={imageIsLoaded}>
                <Image
                  onLoad={() => setImageIsLoaded(true)}
                  src={bio.asset.path}
                  loader={myLoader}
                  alt="picture of me"
                  width={550}
                  height={550}
                />
              </Skeleton>
            </Box>
            <Box
              h="full"
              w={{ base: "full", sm: 3 / 5 }}
              p={4}
              textStyle="body"
            >
              {!isSmall && (
                <Text align="left" textStyle="h4" mb={4}>
                  about me
                </Text>
              )}
              {/* <Text textStyle="body">{bio.markdown}</Text> */}
              <ReactMarkdown
                renderers={ChakraUIRenderer()}
                source={bio.markdown}
                escapeHtml={true}
              />
            </Box>
          </Stack>
        </Center>
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await getBio();
  // console.log(res);
  return { props: res };
}
