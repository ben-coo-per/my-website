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
      </Stack>
    </Stack>
  );
}
