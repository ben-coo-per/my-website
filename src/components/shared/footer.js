import { Box, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box position="absolute" bottom={0} w="full" py={2} px={4}>
      <Stack direction="row" justify="space-between">
        <Text textStyle="caption">2021</Text>
        <Text textStyle="caption">built with Next JS & Chakra UI </Text>
      </Stack>
    </Box>
  );
}
