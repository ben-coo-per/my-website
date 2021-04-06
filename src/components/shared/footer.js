import { Box, Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineGlobe } from "react-icons/hi";

export default function Footer() {
  return (
    <Stack
      direction="row"
      justify="center"
      bg="darkChocolate"
      p={4}
      mt={10}
      mb={-2}
    >
      <Stack direction="column" justify="center">
        <Stack direction="row" justify="center" spacing={0}>
          <Link href="https://twitter.com/cooperben83">
            <IconButton variant="link" color="babyPowder">
              <Icon as={FaTwitter} />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/benjamin-cooper1996/">
            <IconButton variant="link" color="babyPowder">
              <Icon as={FaLinkedinIn} />
            </IconButton>
          </Link>
          {/* <Link href="https://dribbble.com/ben-cooper/shots">
            <IconButton variant="link" color="babyPowder">
              <Icon as={FaDribbble} />
            </IconButton>
          </Link> */}
          <Link href="mailto:me@bencooper.xyz?subject=howdy!">
            <IconButton variant="link" color="babyPowder">
              <Icon as={FaEnvelope} />
            </IconButton>
          </Link>
        </Stack>
        <Stack direction="column" spacing={0}>
          <Text color="babyPowder">Built with Next JS & Chakra UI</Text>
          <Flex justify="center" align="center">
            <Text color="babyPowder">in Austin, TX</Text>
            <Icon color="babyPowder" as={HiOutlineGlobe} />
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}
