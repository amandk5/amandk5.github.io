import { Box, Flex, Heading, Image, Text, Badge, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({
  projectName,
  projectImage,
  projectDescription,
  projectLink,
  projectGithubLink,
  techStack,
}) {
  const techs = techStack.split("|").map(t => t.trim()).filter(Boolean);

  return (
    <Box
      as={motion.div}
      w={{ base: "100%", md: "47%", lg: "31%" }}
      bg="rgba(255, 255, 255, 0.02)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.05)"
      borderRadius="2xl"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      whileHover={{ y: -10 }}
      transition="0.3s ease"
      boxShadow="0 10px 30px -10px rgba(0,0,0,0.5)"
      _hover={{
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.7)",
        borderColor: "brand.themeColor"
      }}
    >
      <Box overflow="hidden" position="relative" h="200px">
        <Image 
          src={projectImage} 
          w="100%" 
          h="100%" 
          objectFit="cover" 
          transition="0.5s ease"
          _hover={{ transform: "scale(1.05)" }}
        />
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          w="100%" 
          h="100%" 
          bg="linear-gradient(180deg, rgba(11,15,25,0) 0%, rgba(11,15,25,0.8) 100%)" 
          pointerEvents="none"
        />
      </Box>

      <Box p={6} display="flex" flexDirection="column" flex="1">
        <Heading fontSize="2xl" color="whiteAlpha.900" mb={3} fontWeight="700">
          {projectName}
        </Heading>
        
        <Text color="whiteAlpha.700" fontSize="md" mb={6} flex="1" lineHeight="1.6">
          {projectDescription}
        </Text>

        <Box mb={6}>
          <Flex wrap="wrap" gap={2}>
            {techs.map((tech, idx) => (
              <Badge 
                key={idx} 
                px={2} 
                py={1} 
                bg="rgba(14, 165, 233, 0.15)" 
                color="brand.themeColor" 
                borderRadius="md"
                textTransform="none"
                fontWeight="500"
                fontSize="xs"
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        </Box>

        <Flex gap={4} mt="auto">
          <Link
            href={projectGithubLink}
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color="whiteAlpha.700"
            _hover={{ color: "brand.themeColor", textDecoration: "none" }}
            fontSize="sm"
            fontWeight="600"
          >
            <Icon as={FiGithub} boxSize={5} /> Source
          </Link>
          <Link
            href={projectLink}
            isExternal
            display="flex"
            alignItems="center"
            gap={2}
            color="whiteAlpha.700"
            _hover={{ color: "brand.themeColor", textDecoration: "none" }}
            fontSize="sm"
            fontWeight="600"
          >
            <Icon as={FiExternalLink} boxSize={5} /> Live Demo
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
