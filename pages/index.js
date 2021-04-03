import Head from "next/head";
import Link from "next/link";
import { Box, Container, Stack, Text } from "@chakra-ui/react";

import Footer from "../src/components/shared/footer";
import { Brand, Header } from "../src/components/shared/pageHeader";
import { Default, Hover } from "../src/svg/BenLogo";

export default function Home() {
  return (
    <>
      <Head>
        <title>&#128075; hey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Brand />

        <Container maxW="container.xl" minH="100vh" pt={{ base: 32, sm: 20 }}>
          <Text textStyle={{ md: "h1", sm: "h2", base: "h3" }}>
            Hey, I'm Ben
          </Text>
          <Text textStyle={{ md: "h2", sm: "h3", base: "h4" }}>
            Welcome to my website
          </Text>
          <Stack
            py={{ sm: 20, base: 5 }}
            direction={{ base: "column", sm: "row" }}
            spacing={{ md: 20, base: 5 }}
          >
            <HomePageLink text="about" href="/about" />
            <HomePageLink text="work" href="/work" />
            <HomePageLink text="art" href="/art" />
            {/* <HomePageLink text="beer" />
            <HomePageLink text="blog" /> */}
          </Stack>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

function HomePageLink({ href = "/", text }) {
  return (
    <Link href={href}>
      <a>
        <Text
          textStyle={{ md: "h3", sm: "h4", base: "h5" }}
          _hover={{ textDecoration: "underline" }}
        >
          {text}
        </Text>
      </a>
    </Link>
  );
}
