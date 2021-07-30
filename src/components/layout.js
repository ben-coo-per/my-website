import { useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "./pageHeader";
import { SkeletonCard } from "./cards";

import Footer from "./footer";
import { FilterSelection } from "./filterSelection";
import { SelectionBlurb } from "./SelectionBlurb";

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
          <Container
            maxW="container.xl"
            minH="100vh"
            pt={16}
            pb={8}
            px={{ base: null, lg: 16 }}
          >
            <FilterSelection />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} pt={3}>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </SimpleGrid>
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
          <Container maxW="container.xl" minH="100vh" pt={16} pb={14}>
            <FilterSelection />
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
  const isSmall = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <main>
        <Header pageTitle={pageTitle} backURL={backURL} />
        <Container
          maxW="container.xl"
          minH="100vh"
          pt={16}
          pb={8}
          px={{ base: null, lg: 16 }}
        >
          <Text
            align={isSmall ? "center" : "left"}
            px={isSmall ? null : 8}
            textStyle="h4"
          >
            {pageTitle}
          </Text>

          <FilterSelection />
          <SelectionBlurb />
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} pt={3}>
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

function ProjectPage({
  children,
  projectTitle,
  project,
  backURL,
  isLoading = false,
}) {
  const [galleryStep, setGalleryStep] = useState(0);
  return (
    <>
      <main>
        <Header
          pageTitle={project ? project.title : projectTitle}
          backURL={backURL}
          isLoading={isLoading}
        />
        <Container maxW="container.lg" minH="100vh" pt={16} pb={8}>
          {isLoading ? (
            <Stack>
              <Skeleton>
                <Box h="50vh" bg="blue"></Box>
              </Skeleton>
              <SkeletonText noOfLines={6} spacing={4} />
            </Stack>
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
