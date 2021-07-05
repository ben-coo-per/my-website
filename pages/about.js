import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { getBio } from "./api/getBio";
import { Header } from "../src/components/shared/pageHeader";
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
import Footer from "../src/components/shared/footer";

export default function AboutPage({ bio }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const isSmall = useBreakpointValue({ base: true, md: false });

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
            <Box>
              <Skeleton
                isLoaded={imageIsLoaded}
                h={!imageIsLoaded ? "60vh" : null}
                w={{ base: "full" }}
              >
                <Image
                  onLoad={() => setImageIsLoaded(true)}
                  src={`https://images.takeshape.io/${bio.asset.path}`}
                  alt="ben headshot"
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
