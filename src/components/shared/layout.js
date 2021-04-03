import Link from "next/link";
import {
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Header } from "./pageHeader";

import Footer from "./footer";

function DisplayPage({
  children,
  pageTitle,
  backURL,
  isLoading = false,
  error = false,
}) {
  if (isLoading) {
    return (
      <>
        <main>
          <Header
            pageTitle={pageTitle}
            backURL={backURL}
            isLoading={isLoading}
          />
          <Container maxW="container.xl" minH="100vh" pt={48} pb={14}>
            <Skeleton>
              <Box h="200px" w="full" />
            </Skeleton>
          </Container>
        </main>

        <footer>
          <Footer />
        </footer>
      </>
    );
  }

  if (error) {
    return (
      <>
        <main>
          <Header pageTitle={pageTitle} backURL={backURL} />
          <Container maxW="container.xl" minH="100vh" pt={48} pb={14}>
            <Stack bg="">
              <Text color="darkChocolate" textStyle="h4" align="center">
                Oops!
              </Text>
              <Text color="darkChocolate" textStyle="h5" align="center">
                Something went wrong when fetching the projects.
              </Text>
            </Stack>
          </Container>
        </main>

        <footer>
          <Footer />
        </footer>
      </>
    );
  }
  return (
    <>
      <main>
        <Header pageTitle={pageTitle} backURL={backURL} />
        <Container maxW="container.xl" minH="100vh" pt={48} pb={14}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} pt={3}>
            {children}
          </SimpleGrid>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

function ProjectPage({ children, pageTitle, backURL, isLoading = false }) {
  return (
    <>
      <main>
        <Header pageTitle={pageTitle} backURL={backURL} isLoading={isLoading} />
        <Container maxW="container.xl" minH="100vh" pt={48} pb={14}>
          {isLoading ? (
            <Skeleton>
              <Box h="200px" w="full" />
            </Skeleton>
          ) : (
            <Stack>{children}</Stack>
          )}
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export { DisplayPage, ProjectPage };
