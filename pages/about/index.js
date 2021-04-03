import Head from "next/head";

// import { DisplayPage } from "../../src/components/shared/layout";
import { Header } from "../../src/components/shared/pageHeader";
import { Box, Image, Text, Container, SimpleGrid } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header pageTitle="About Me" backURL="/" />
      <Container maxW="container.xl" minH="100vh" pt={48} pb={14}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} pt={3}>
          <Box>
            <Text textStyle="body">
              I design, build, and break with the intention of improving the way
              we interact with our world and each other.
              <br />
              <br />
              I went to school for chemical engineering but learned I was more
              suited to product development. <br />
              <br />
              After graduation, I began working at Accenture and gained
              experience running development teams & managing a product. <br />
              <br />
              I am now working on a start up aimed at making interacting with
              local politicians easy, inclusive, and impactful.
              <br />
              <br />I like watching movies when it rains and riding my bike when
              it doesn’t.
            </Text>
          </Box>

          <Box position="relative" pb={5}>
            <Image
              position="fixed"
              w="48%"
              // onLoad={() => setImageIsLoaded(true)}
              borderRadius="lg"
              src="https://bit.ly/2Z4KKcF"
              alt="ben headshot"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
}
