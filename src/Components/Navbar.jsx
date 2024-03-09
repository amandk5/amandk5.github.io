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
  CloseButton,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import NavbarStyles from "./Navbar.module.css";

export default function Navbar() {
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Flex
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
        boxShadow="0 2px 2px -2px gainsboro"
        position="sticky"
        top="0"
        background="white"
        zIndex="10"
      >
        <Box>
          <a href="#top">
            <Text
              as="b"
              fontSize="35px"
              fontWeight="extrabold"
              align="left"
              color="brand.themeColor"
            >
              MY PORTFOLIO
            </Text>
          </a>
        </Box>
        {!isSmallerThan700 ? (
          <Box display="flex" columnGap="3" justifyContent="space-around">
            <Link
              fontWeight="bold"
              textUnderlineOffset="0.5em"
              as={motion.div}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition="0.1s linear"
            >
              <a href="#top">Home</a>
            </Link>
            <Link
              fontWeight="bold"
              textUnderlineOffset="0.5em"
              as={motion.div}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition="0.1s linear"
            >
              <a href="#about">About</a>
            </Link>
            <Link
              fontWeight="bold"
              textUnderlineOffset="0.5em"
              as={motion.div}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition="0.1s linear"
            >
              <a href="#skills">Skills</a>
            </Link>
            <Link
              fontWeight="bold"
              textUnderlineOffset="0.5em"
              as={motion.div}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition="0.1s linear"
            >
              <a href="#projects">Projects</a>
            </Link>
            <Link
              fontWeight="bold"
              textUnderlineOffset="0.5em"
              as={motion.div}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition="0.1s linear"
            >
              <a href="#contact">Contact</a>
            </Link>
            <Link
              fontWeight="bold"
              textUnderlineOffset="0.5em"
              as={motion.div}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition="0.1s linear"
            >
              <a
                href="https://github.com/amandk5/Resume/raw/main/Aman-Deep-Kujur-Resume.pdf"
                download
              >
                Resume
              </a>
            </Link>
          </Box>
        ) : (
          <button ref={btnRef} onClick={onOpen}>
            <AiOutlineMenu />
          </button>
        )}
      </Flex>
      {/* drawer  */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            border="1px solid black"
            p="0"
            m="0"
            display="flex"
            flexDirection="column"
          >
            <Link>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="2"
              >
                {/* <FaUserAlt /> */}
                <a href="#top">Home</a>
              </Flex>
            </Link>
            <Link>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="2"
              >
                {/* <FaUserAlt /> */}
                <a href="#about">About</a>
              </Flex>
            </Link>
            <Link>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="2"
              >
                {/* <FaUserAlt /> */}
                <a href="#skills">Skills</a>
              </Flex>
            </Link>
            <Link>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="2"
              >
                {/* <FaUserAlt /> */}
                <a href="#projects">Projects</a>
              </Flex>
            </Link>
            <Link>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="2"
              >
                {/* <FaUserAlt /> */}
                <a href="#contact">Contact</a>
              </Flex>
            </Link>
            <Link>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="2"
              >
                {/* <FaUserAlt /> */}
                <a href="#top">Resume</a>
              </Flex>
            </Link>

            {/* <Link as="b" textUnderlineOffset="0.5em">
              <a href="#top">Home</a>
            </Link> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
