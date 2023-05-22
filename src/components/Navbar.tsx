import {
  HStack,
  Button,
  Flex,
  Text,
  Spacer,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { BsChevronDown, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex marginX={4}>
      <HStack>
        <Link to="/">Home</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/characters">Characters</Link>

        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            More
          </MenuButton>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Recent Characters
          </MenuButton>
        </Menu>
      </HStack>

      <Spacer />
      <HStack>
        <Text>User Name</Text>
        <Button>Log In / Log Out</Button>
        <BsMoon />
      </HStack>
    </Flex>
  );
}

export default Navbar;
