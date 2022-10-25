import { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Navigate, NavLink } from "react-router-dom";

const Links = ["Dashboard", "Projects", "Team"];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [navbar, setNavbar] = useState(false);

  const changeNavbarBg = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 1100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  return (
    <>
      <Box bg="#6929c4" px={4} position="sticky" zIndex={100} top="0">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            display={{ base: "none", md: "block" }}
          >
            <Flex color={"white"}>
              <Image
                src="https://i.postimg.cc/kXkJm1sG/final-logo-removebg-preview.png"
                alt="logo"
                w="auto"
                h="36px"
              />
            </Flex>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Box display={{ base: "none", md: "block" }} w="50%" m="auto">
            <Flex direction={"row"} justifyContent="space-between">
              <Text
                color={"white"}
                fontWeight="600"
                fontSize="md"
                fontFamily="Poppins"
              >
                Home
              </Text>
              <Text
                color={"white"}
                fontWeight="600"
                fontSize="md"
                fontFamily="Poppins"
              >
                About
              </Text>
              <Text
                color={"white"}
                fontWeight="600"
                fontSize="md"
                fontFamily="Poppins"
              >
                Skills
              </Text>
              <Text
                color={"white"}
                fontWeight="600"
                fontSize="md"
                fontFamily="Poppins"
              >
                Project
              </Text>
              <Text
                color={"white"}
                fontWeight="600"
                fontSize="md"
                fontFamily="Poppins"
              >
                Contact
              </Text>
            </Flex>
          </Box>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode} bg="#6929c4">
              {colorMode === "light" ? (
                <MoonIcon
                  color={colorMode === "light" ? "white" : "white"}
                  bg="#6929c4"
                  _hover={{ bg: "teal.600" }}
                />
              ) : (
                <SunIcon />
              )}
            </Button>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
}
