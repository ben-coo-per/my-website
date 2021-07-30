import { Button, Stack, Text } from "@chakra-ui/react";
import {
  HiSparkles,
  HiOutlineSparkles,
  HiFire,
  HiOutlineFire,
  HiOutlineHand,
  HiHand,
} from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  setSelectedFilter,
} from "../../features/projects/projectsSlice";

export function FilterSelection() {
  const filtersList = [
    {
      name: "proud of",
      icon: { selected: <HiFire />, unselected: <HiOutlineFire /> },
    },
    {
      name: "okay",
      icon: { selected: <HiSparkles />, unselected: <HiOutlineSparkles /> },
    },
    {
      name: "mostly junk",
      icon: { selected: <HiHand />, unselected: <HiOutlineHand /> },
    },
  ];

  return (
    <>
      <Stack
        w="full"
        direction="row"
        px={8}
        spacing={8}
        h={10}
        borderRadius="full"
      >
        {filtersList.map((filter) => (
          <FilterSelectionItem
            key={filter.name}
            name={filter.name}
            selectedIcon={filter.icon.selected}
            unselectedIcon={filter.icon.unselected}
          />
        ))}
      </Stack>
    </>
  );
}

function FilterSelectionItem({ name, selectedIcon, unselectedIcon }) {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectFilter);
  const isSelected = selectedFilter.filter == name;

  function handleFilterSelection() {
    dispatch(setSelectedFilter(name));
  }

  return (
    <Button
      variant="link"
      leftIcon={isSelected ? selectedIcon : unselectedIcon}
      onClick={handleFilterSelection}
      color={isSelected ? "queenBlue" : "darkChocolate"}
      _hover={{
        color: "queenBlue",
      }}
      textStyle={isSelected ? "selectedLink" : "link"}
    >
      <Text>{name}</Text>
    </Button>
  );
}
