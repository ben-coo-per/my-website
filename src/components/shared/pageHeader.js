import {
  Box,
  Center,
  Grid,
  GridItem,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { Default, Hover } from "../../svg/BenLogo";

function Header({ pageTitle, backURL = "/", isLoading = false }) {
  if (isLoading) {
    return (
      <Grid
        position="fixed"
        top={0}
        bg="white"
        w="full"
        h={{ base: 32, sm: 40, md: 48 }}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
        p={4}
        zIndex={30}
      >
        <GridItem colSpan={3}>
          <Link href={backURL}>
            <a>
              <Text
                textStyle={{ md: "h3", sm: "h4", base: "h5" }}
                _hover={{ textDecoration: "underline" }}
              >
                {"< back"}
              </Text>
            </a>
          </Link>
        </GridItem>

        <GridItem rowSpan={3} colSpan={2}>
          <Stack p={3} direction="row" justify="flex-end">
            <Link href="/">
              <a>
                <Default
                  h={{ base: 20, md: 24, lg: 28 }}
                  w={{ base: 20, md: 24, lg: 28 }}
                />
              </a>
            </Link>
          </Stack>
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <Skeleton>
            <Text textStyle={{ base: "h3" }}>pageTitle</Text>
          </Skeleton>
        </GridItem>
      </Grid>
    );
  }
  return (
    <Grid
      position="fixed"
      top={0}
      bg="white"
      w="full"
      h={{ base: 32, sm: 40, md: 48 }}
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={2}
      p={4}
      zIndex={30}
    >
      <GridItem colSpan={3}>
        <Link href={backURL}>
          <a>
            <Text
              textStyle={{ md: "h3", sm: "h4", base: "h5" }}
              _hover={{ textDecoration: "underline" }}
            >
              {"< back"}
            </Text>
          </a>
        </Link>
      </GridItem>

      <GridItem rowSpan={3} colSpan={2}>
        <Stack p={3} direction="row" justify="flex-end">
          <Link href="/">
            <a>
              <Default
                h={{ base: 20, md: 24, lg: 28 }}
                w={{ base: 20, md: 24, lg: 28 }}
              />
            </a>
          </Link>
        </Stack>
      </GridItem>
      <GridItem rowSpan={2} colSpan={3}>
        <Text textStyle={{ base: "h4", sm: "h3", md: "h2" }}>{pageTitle}</Text>
      </GridItem>
    </Grid>
  );
}

function Brand() {
  return (
    <Box
      position="fixed"
      top={0}
      w="full"
      h={{ base: 32, sm: 40, md: 48 }}
      p={4}
    >
      <Stack p={3} direction="row" justify="flex-end">
        <Default
          h={{ base: 20, md: 24, lg: 28 }}
          w={{ base: 20, md: 24, lg: 28 }}
        />
      </Stack>
    </Box>
  );
}

export { Header, Brand };
