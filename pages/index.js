import Link from "next/link";
import Head from "next/head";
import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";

import Footer from "../src/components/footer";
import { Brand, Header } from "../src/components/pageHeader";
import {
  HiOutlineEmojiHappy,
  HiOutlineBriefcase,
  HiOutlineSparkles,
} from "react-icons/hi";
import { Default } from "../src/svg/BenLogo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Cooper</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main>
        {/* <Brand /> */}

        <Container maxW="container.lg" minH="100vh" p={{ base: 5 }}>
          <Stack
            spacing={{ base: 10, sm: 20 }}
            align={{ base: "center", sm: "flex-start" }}
          >
            <Default h={{ base: 20 }} w={{ base: 20 }} />
            <Box>
              <Text
                align={{ base: "center", sm: "left" }}
                textStyle={{ base: "h4", sm: "h2" }}
              >
                Hey, I'm Ben
              </Text>
              <Text
                align={{ base: "center", sm: "left" }}
                textStyle={{ base: "link", sm: "subtitle" }}
              >
                Welcome to my website
              </Text>
              <Stack
                py={{ base: 20, sm: 10 }}
                direction={{ base: "column", sm: "row" }}
                spacing={{ md: 16, base: 5 }}
              >
                <HomePageLink
                  text="about me"
                  href="/about"
                  icon={<HiOutlineEmojiHappy />}
                />
                <HomePageLink
                  text="my work"
                  href="/work"
                  icon={<HiOutlineBriefcase />}
                />

                {/* <HomePageLink text="beer" />
            <HomePageLink text="blog" /> */}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

function HomePageLink({ href = "/", text, icon, hoverIcon }) {
  return (
    <Link href={href}>
      <Button
        variant="link"
        leftIcon={icon}
        color="darkChocolate"
        _hover={{
          color: "queenBlue",
          textStyle: "selectedLink",
        }}
        textStyle="link"
      >
        <Text>{text}</Text>
      </Button>
    </Link>
  );
}
