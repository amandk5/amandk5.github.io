import {
  Box,
  Flex,
  Text,
  Link,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  useDisclosure,
  useMediaQuery,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import NavbarStyles from "./Navbar.module.css";

const NavLink = ({ href, children, isDownload, onClick }) => (
  <Link
    as={motion.a}
    href={href}
    download={isDownload}
    onClick={onClick}
    position="relative"
    fontWeight="500"
    color="whiteAlpha.800"
    _hover={{ textDecoration: "none", color: "brand.themeColor" }}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
    transition="0.2s ease"
    px={3}
    py={2}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const scrollTo = (id) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      <Flex
        as="nav"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        padding={{ base: "1rem", md: "1rem 2rem" }}
        position="sticky"
        top="0"
        zIndex="100"
        bg="rgba(11, 15, 25, 0.7)"
        backdropFilter="blur(12px)"
        borderBottom="1px solid rgba(255, 255, 255, 0.05)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      >
        <Box>
          <a href="#top">
            <Text
              as="b"
              fontSize={{ base: "20px", md: "24px" }}
              fontWeight="extrabold"
              letterSpacing="tighter"
              bgGradient="linear(to-r, cyan.400, blue.500)"
              bgClip="text"
            >
              PORTFOLIO.
            </Text>
          </a>
        </Box>
        
        {!isSmallerThan700 ? (
          <Flex columnGap="4" alignItems="center">
            <NavLink href="#top">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Link
              as={motion.a}
              href="https://github.com/amandk5/Resume/raw/main/Aman-Deep-Kujur-Resume.pdf"
              download
              bg="brand.themeColor"
              color="white"
              px={5}
              py={2}
              borderRadius="full"
              fontWeight="600"
              _hover={{ textDecoration: "none", bg: "blue.400" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(14, 165, 233, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </Link>
          </Flex>
        ) : (
          <Box as="button" ref={btnRef} onClick={onOpen} color="white" fontSize="24px" p={1}>
            <AiOutlineMenu />
          </Box>
        )}
      </Flex>

      {/* Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <DrawerContent bg="#0f172a" color="white">
          <DrawerCloseButton color="white" />
          <DrawerBody
            display="flex"
            flexDirection="column"
            pt={12}
            gap={6}
            px={8}
          >
            <Link onClick={() => scrollTo('top')} fontSize="xl" fontWeight="600" _hover={{ color: "brand.themeColor" }}>Home</Link>
            <Link onClick={() => scrollTo('about')} fontSize="xl" fontWeight="600" _hover={{ color: "brand.themeColor" }}>About</Link>
            <Link onClick={() => scrollTo('skills')} fontSize="xl" fontWeight="600" _hover={{ color: "brand.themeColor" }}>Skills</Link>
            <Link onClick={() => scrollTo('projects')} fontSize="xl" fontWeight="600" _hover={{ color: "brand.themeColor" }}>Projects</Link>
            <Link onClick={() => scrollTo('contact')} fontSize="xl" fontWeight="600" _hover={{ color: "brand.themeColor" }}>Contact</Link>
            <Link 
              href="https://github.com/amandk5/Resume/raw/main/Aman-Deep-Kujur-Resume.pdf" 
              download
              onClick={onClose} 
              fontSize="xl" 
              fontWeight="600" 
              color="brand.themeColor"
              mt={4}
            >
              Resume
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
