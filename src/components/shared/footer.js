import { Box, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineGlobe } from "react-icons/hi";

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
      <Stack direction="column">
        <Stack direction="row" spacing={0}>
          <Link href="https://twitter.com/cooperben83">
            <IconButton
              _hover={{ cursor: "pointer" }}
              variant="link"
              boxSize={4}
              as={FaTwitter}
              color="babyPowder"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/benjamin-cooper1996/">
            <IconButton
              _hover={{ cursor: "pointer" }}
              variant="link"
              boxSize={4}
              as={FaLinkedinIn}
              color="babyPowder"
            />
          </Link>
          <Link href="https://dribbble.com/ben-cooper/shots">
            <IconButton
              _hover={{ cursor: "pointer" }}
              variant="link"
              boxSize={4}
              as={FaDribbble}
              color="babyPowder"
            />
          </Link>
          <Link href="mailto:me@bencooper.xyz?subject=howdy!">
            <IconButton
              _hover={{ cursor: "pointer" }}
              variant="link"
              boxSize={4}
              as={FaEnvelope}
              color="babyPowder"
            />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
