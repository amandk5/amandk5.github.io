import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import { Box, Flex, Tooltip, useMediaQuery } from "@chakra-ui/react";

export default function LinkedInAndGithub() {
  const [isSmallerThan700] = useMediaQuery("(max-width: 450px)");

  const animationKeyframes = keyframes` 
	0% {opacity: 0;} // CSS properties at start
	100% {opacity: 1;} // CSS properties at end
	`;

  const animation = `${animationKeyframes} 2s ease-in-out`;

  return (
    <>
      <Flex
        alignItems={isSmallerThan700 && "center"}
        justifyContent={isSmallerThan700 && "center"}
        columnGap="3"
        as={motion.div}
        animation={animation}
        // not work: transition={{ ... }}
        padding="2"
        // @ts-ignore - "Does not exist" Type Error against Motion
        width="12"
        height="12"
        display="flex"
      >
        <Tooltip label="Github">
          <a href="https://github.com/amandk5" target="_blank" rel="noreferrer">
            <Box
              as={motion.div}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition="0.1s linear"
            >
              <AiFillGithub size="50px" />
            </Box>
          </a>
        </Tooltip>
        <Tooltip label="LinkdedIn">
          <a
            href="https://www.linkedin.com/in/aman-deep-kujur-4a110a171"
            target="_blank"
            rel="noreferrer"
          >
            <Box
              as={motion.div}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition="0.1s linear"
            >
              <AiFillLinkedin size="50px" color="#0A66C2" />
            </Box>
          </a>
        </Tooltip>
      </Flex>
    </>
  );
}
