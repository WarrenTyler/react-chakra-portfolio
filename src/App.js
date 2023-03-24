import {
  VStack,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Header from "./components/Header";

function App() {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<FaMoon />, <FaSun />)

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml={8} size="md" fontWeight={"semibold"} color="cyan.400">
          Warren
        </Heading>
        <Spacer />
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        />
        <IconButton
          icon={<FaInstagram />}
          isRound="true"
          ml={2}
          onClick={toggleColorMode}
        />
        <IconButton
          icon={<FaGithub />}
          isRound="true"
          ml={2}
          onClick={toggleColorMode}
        />
        <IconButton
          icon={icon}
          isRound="true"
          ml={8}
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
    </VStack>
  );
}

export default App;
