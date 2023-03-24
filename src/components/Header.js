import {
  Circle,
  Flex,
  Stack,
  useMediaQuery,
  Text,
  Button,
  Box,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import React from "react";

export default function Header() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  // const { toggleColorMode } = useColorMode();

  // const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("gray.500", "gray.200");

  return (
    <Stack>
      <Circle
        position={"absolute"}
        bg="blue.100"
        opacity={0.1}
        w="300px"
        h="300px"
        alignSelf={"flex-end"}
      />
      <Flex
        direction={isLargerThan600 ? "row" : "column"}
        
        p={isLargerThan600 ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isLargerThan600 ? "0" : "16"} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Warren Tyler
          </Text>
          <Text color={color}>
            JavaScript, React and Chakra UI Development
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("https://github.com/WarrenTyler")}
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          m={isLargerThan600 ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/WarrenTyler"
        />
      </Flex>
    </Stack>
  );
}
