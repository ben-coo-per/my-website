import {
  Box,
  Button,
  Center,
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
import { Default, Hover } from "../../svg/BenLogo";
import {
  HiArrowLeft,
  HiOutlineEmojiHappy,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiEmojiHappy,
  HiBriefcase,
  HiSparkles,
} from "react-icons/hi";

// function Header({ pageTitle, backURL = "/", isLoading = false }) {
//   if (isLoading) {
//     return (
//       <Grid
//         position="fixed"
//         top={0}
//         bg="white"
//         w="full"
//         h={{ base: 32, sm: 40, md: 48 }}
//         templateRows="repeat(3, 1fr)"
//         templateColumns="repeat(5, 1fr)"
//         gap={2}
//         p={4}
//         zIndex={30}
//       >
//         <GridItem colSpan={3}>
//           <Link href={backURL}>
//             <Button variant="link" leftIcon={<HiArrowLeft />} textStyle="body">
//               back
//             </Button>
//           </Link>
//         </GridItem>

//         <GridItem rowSpan={3} colSpan={2}>
//           <Stack p={3} direction="row" justify="flex-end">
//             <Link href="/">
//               <Button
//                 variant="link"
//                 leftIcon={<HiArrowLeft />}
//                 textStyle="body"
//               >
//                 back
//               </Button>
//             </Link>
//           </Stack>
//         </GridItem>
//         <GridItem rowSpan={2} colSpan={3}>
//           <Skeleton>
//             <Text textStyle={{ md: "h3", sm: "h4", base: "h5" }}>
//               pageTitle
//             </Text>
//           </Skeleton>
//         </GridItem>
//       </Grid>
//     );
//   }
//   return (
//     <Grid
//       position="fixed"
//       top={0}
//       bg="bg"
//       boxShadow={`0px 10px 10px #F7F7F3`}
//       w="full"
//       h={{ base: 32, sm: 40, md: 48 }}
//       templateRows="repeat(3, 1fr)"
//       templateColumns="repeat(5, 1fr)"
//       gap={2}
//       p={4}
//       zIndex={30}
//     >
//       <GridItem colSpan={3}>
//         <Link href={backURL}>
//           <Button variant="link" leftIcon={<HiArrowLeft />} textStyle="body">
//             back
//           </Button>
//         </Link>
//       </GridItem>

//       <GridItem rowSpan={2} colSpan={2}>
//         <Stack p={3} direction="row" justify="flex-end">
//           <Link href="/">
//             <a>
//               <Default
//                 h={{ base: 20, md: 24, lg: 28 }}
//                 w={{ base: 20, md: 24, lg: 28 }}
//               />
//             </a>
//           </Link>
//         </Stack>
//       </GridItem>
//       <GridItem rowSpan={3} colSpan={3} mt={-3}>
//         <Text textStyle={{ base: "h4", sm: "h3", md: "h2" }}>{pageTitle}</Text>
//       </GridItem>
//     </Grid>
//   );
// }

function Header({ pageTitle, backURL = "/", isLoading = false }) {
  if (isLoading) {
    return (
      <Stack
        position="fixed"
        top={0}
        zIndex={30}
        bg="bg"
        boxShadow={`0px 10px 10px #F7F7F3`}
        w="full"
        direction="row"
        p={4}
        justify="space-between"
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
            text="work"
            href="/work"
            isSelected={pageTitle === "work"}
            icon={
              pageTitle === "work" ? <HiBriefcase /> : <HiOutlineBriefcase />
            }
          />
          <NavLink
            text="junk"
            href="/art"
            isSelected={pageTitle === "art"}
            icon={pageTitle === "art" ? <HiSparkles /> : <HiOutlineSparkles />}
          />
        </Stack>
      </Stack>
    );
  }
  return (
    <Stack
      position="fixed"
      top={0}
      zIndex={30}
      bg="bg"
      boxShadow={`0px 10px 10px #F7F7F3`}
      w="full"
      direction="row"
      p={4}
      justify="space-between"
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
          text="work"
          href="/work"
          isSelected={pageTitle === "work"}
          icon={pageTitle === "work" ? <HiBriefcase /> : <HiOutlineBriefcase />}
        />
        <NavLink
          text="junk"
          href="/art"
          isSelected={pageTitle === "art"}
          icon={pageTitle === "art" ? <HiSparkles /> : <HiOutlineSparkles />}
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
            textStyle: "selectedLink",
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
