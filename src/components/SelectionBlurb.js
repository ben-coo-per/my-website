import { Text, Box, Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectFilter } from "../../features/projects/projectsSlice";

const blurbMapper = [
  {
    filter: "proud of",
    blurb: (
      <>
        <Text textStyle="body">
          These are the projects that I am the most proud of.
        </Text>
        <Text textStyle="body">
          They are either work that was done on behalf of a client or projects
          that I have put out into the world.
        </Text>
      </>
    ),
  },
  {
    filter: "okay",
    blurb: (
      <>
        <Text textStyle="body">
          These are projects I have done mostly for myself.
        </Text>
        <Text textStyle="body">
          They're fun, full of lessons learned, and usually turned out better
          than I anticipated.
        </Text>
      </>
    ),
  },
  {
    filter: "mostly junk",
    blurb: (
      <>
        <Text textStyle="body">This one is an exercise in vulnerability.</Text>
        <Text textStyle="body">
          I find that many of the ideas I try out, I don't bring to completion.
        </Text>
        <Text textStyle="body">
          Typically, other projects have taken precedence and I have abandoned
          these projects. I still want to give them a resting place (who know's,
          maybe they'll rise from the dead someday)
        </Text>
      </>
    ),
  },
];

export const SelectionBlurb = () => {
  const filter = useSelector(selectFilter);

  const blurb = blurbMapper.filter((el) => el.filter === filter.filter)[0]
    .blurb;

  return (
    <Box px={8} py={4}>
      {blurb}
      <Divider />
    </Box>
  );
};
