import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorMode,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Links = [
  { path: "hero", title: "Home" },
  { path: "about", title: "About" },
  { path: "skills", title: "Skills" },
  { path: "project", title: "Project" },
  { path: "contact", title: "Contact" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [navbar, setNavbar] = useState(false);

  const changeNavbarBg = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 650) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  return (
    <>
      <Box
        bg={navbar ? "white" : "#6929c4"}
        px={4}
        position="sticky"
        zIndex={100}
        top="0"
        boxShadow={navbar ? "rgba(0, 0, 0, 0.1) 0px 4px 12px" : null}
        // boxShadow={navbar ? "rgba(0, 0, 0, 0.16) 0px 1px 2px" : null}
      >
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
            <Flex color={"black"}>
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
            <Flex
              direction={"row"}
              justifyContent="space-between"
              color={navbar ? "gray.700" : "white"}
            >
              {Links.map(({ path, title }) => {
                return (
                  <AnchorLink href={`#${path}`}>
                    <Text
                      // color={"white"}
                      fontWeight="600"
                      fontSize="md"
                      fontFamily="Poppins"
                    >
                      {title}
                    </Text>
                  </AnchorLink>
                );
              })}
            </Flex>
          </Box>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode} bg="#6929c4">
              {colorMode === "light" ? (
                <MoonIcon
                  color={colorMode === "light" ? "white" : "white"}
                  bg={navbar ? null : "#6929c4"}
                  _hover={{ bg: "teal.600" }}
                />
              ) : (
                <SunIcon />
              )}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <VStack
            justifyContent={"center"}
            flexDirection="row"
            textAlign="center"
            alignItems="center"
            h="100vh"
            display={{ md: "none" }}
            fontWeight="500"
            fontSize="16px"
          >
            <VStack spacing={14} mt="20">
              {Links.map((elem) => (
                <AnchorLink href={`#${elem.path}`} key={elem.title}>
                  <Text color="white" fontFamily="Poppins" fontSize="18px">
                    {elem.title}
                  </Text>
                </AnchorLink>
              ))}
              {/* <AnchorLink
                href="https://github.com/actuallyakshay/actuallyakshay.github.io/raw/master/Akshay-Rajput-Resume.pdf"
                download={"Akshay-Rajput-Resume"}
              >
                RESUME
              </AnchorLink> */}
            </VStack>
          </VStack>
        ) : null}
      </Box>
    </>
  );
}
