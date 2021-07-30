import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { Default, Hover } from "../svg/BenLogo";
import {
  HiArrowLeft,
  HiOutlineEmojiHappy,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiEmojiHappy,
  HiBriefcase,
  HiSparkles,
} from "react-icons/hi";

function Header({ pageTitle, backURL = "/" }) {
  return (
    <Stack
      position="fixed"
      top={0}
      zIndex={30}
      bg="bg"
      boxShadow={`0px 10px 10px #F7F7F3`}
      w="full"
      direction="row"
      py={4}
      justify="space-between"
      px={{ base: 4, sm: 8, lg: 20, xl: 40 }}
    >
      <NavLink text="back" href={backURL} icon={<HiArrowLeft />} />

      <Stack direction="row" spacing={{ base: 2, sm: 10 }}>
        <NavLink
          text="about"
          href="/about"
          isSelected={pageTitle === "about"}
          icon={
            pageTitle === "about" ? <HiEmojiHappy /> : <HiOutlineEmojiHappy />
          }
        />
        <NavLink
          text="my work"
          href="/work"
          isSelected={pageTitle === "my work"}
          icon={
            pageTitle === "my work" ? <HiBriefcase /> : <HiOutlineBriefcase />
          }
        />
      </Stack>
    </Stack>
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

function NavLink({ href = "/", text, icon, isSelected }) {
  const isMobile = useBreakpointValue({ base: true, sm: false });
  return (
    <Link href={href}>
      {isMobile ? (
        <Button
          variant="link"
          leftIcon={icon}
          iconSpacing={0}
          p={2}
          color={isSelected ? "queenBlue" : "darkChocolate"}
        />
      ) : (
        <Button
          variant="link"
          leftIcon={icon}
          color={isSelected ? "queenBlue" : "darkChocolate"}
          _hover={{
            color: "queenBlue",
          }}
          textStyle={isSelected ? "selectedLink" : "link"}
        >
          <Text>{text}</Text>
        </Button>
      )}
    </Link>
  );
}

export { Header, Brand };
