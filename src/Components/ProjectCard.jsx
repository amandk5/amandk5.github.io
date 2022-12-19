import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { AiOutlinePlayCircle, AiFillPlayCircle } from "react-icons/ai";
import { DiCode } from "react-icons/di";

export default function ProjectCard({
  projectName,
  projectImage,
  projectDescription,
  projectLink,
  projectGithubLink,
  techStack,
}) {
  //   const [hoverPlay, setHoverPlay] = useState(false);

  return (
    <>
      <Box
        w={{ sm: "95%", md: "40%", lg: "31%" }}
        p="2"
        bg="white"
        border="1px solid gainsboro"
        borderRadius="0.5rem"
        _hover={{ boxShadow: "xl" }}
        as={motion.div}        
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        transition="0.1s linear"
      >
        <Heading fontSize="23px" bg="" p="2">
          {projectName}
        </Heading>
        <br />
        <Image src={projectImage} border="2px solid gainsboro" />
        <Text p="2" h="100px">
          {projectDescription}
        </Text>
        <Text p="2">
          <b>Tech Stack:</b>
        </Text>
        <Text color="brand.themeColor">{techStack}</Text>
        <Box p="2" bg="">
          <Flex justifyContent="space-between" alignItems="center">
            <Box
              borderRadius="50%"
              color="white"
              background="black"
              _hover={{ color: "black", background: "white" }}
            >
              {/* {!hoverPlay && <AiOutlinePlayCircle size="35px" color="" />} */}
              <a href={projectLink} target="_blank" rel="noreferrer">
                <AiFillPlayCircle size="35px" />
              </a>
            </Box>
            <Box
              borderRadius="50%"
              color="black"
              background="white"
              _hover={{ color: "white", background: "black" }}
            >
              <a href={projectGithubLink} target="blank">
                <DiCode size="35px" />
              </a>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
