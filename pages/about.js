import { useState } from "react";
import Head from "next/head";
// import { DisplayPage } from "../../src/components/shared/layout";
import { Header } from "../src/components/shared/pageHeader";
import {
  Box,
  Image,
  Text,
  Container,
  SimpleGrid,
  Center,
  Skeleton,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Footer from "../src/components/shared/footer";

export default function AboutPage() {
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
          <Stack direction={{ base: "column", sm: "row-reverse" }} pt={3}>
            {isSmall && (
              <Text align="center" textStyle="h4">
                about me
              </Text>
            )}
            <Box w={{ base: "full", sm: 2 / 5 }}>
              <Skeleton
                isLoaded={imageIsLoaded}
                h={!imageIsLoaded ? "60vh" : null}
              >
                <Image
                  onLoad={() => setImageIsLoaded(true)}
                  borderRadius="lg"
                  maxH={{ base: null, sm: "70vh" }}
                  src="https://images.takeshape.io/22d50a8a-e977-4cb2-8431-b3bd32be9a94/dev/99baa90e-754d-41fe-94ce-83125602003d/IMG_3785%20copy.jpg?auto=format%2Ccompress"
                  alt="ben headshot"
                />
              </Skeleton>
            </Box>
            <Box h="full" w={{ base: "full", sm: 3 / 5 }} p={4}>
              <Text textStyle="body">
                I am a designer and product developer based in Austin, TX.
                <br />
                <br />
                I design and build with the intention of making the way we
                interact with our world more fulfilling and sustainable.
                <br />
                <br />
                {/* I went to school for chemical engineering but learned I was more
              suited to product development. <br />
              <br />
              After graduation, I began working at Accenture and gained
              experience running development teams & managing a product. <br />
              <br />
              I am currently working on a start up aimed at making interacting
              with local politicians easy, inclusive, and impactful.
              <br /> */}
                I like watching movies when it rains and riding my bike when it
                doesn’t.
              </Text>
            </Box>
          </Stack>
        </Center>
      </Container>
      <Footer />
    </>
  );
}
