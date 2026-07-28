import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

export default function Card({ image, duration, course, institute, location }) {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition="0.3s ease"
      bg="rgba(255, 255, 255, 0.03)"
      border="1px solid rgba(255, 255, 255, 0.05)"
      borderRadius="xl"
      p={6}
      my={4}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      _hover={{
        bg: "rgba(255, 255, 255, 0.05)",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
        borderColor: "brand.themeColor"
      }}
    >
      <Flex alignItems="center" gap={6} flexDir={{ base: "column", md: "row" }} textAlign={{ base: "center", md: "left" }}>
        <Box 
          bg="whiteAlpha.100" 
          p={3} 
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={image} w="40px" h="40px" objectFit="contain" filter="invert(0.8) brightness(1.5)" />
        </Box>
        <Box flex="1">
          <Text color="brand.themeColor" fontWeight="600" fontSize="sm" mb={1} textTransform="uppercase" letterSpacing="wider">
            {duration}
          </Text>
          <Heading size="md" mb={2} color="whiteAlpha.900">
            {course}
          </Heading>
          <Text color="whiteAlpha.700" fontWeight="500" mb={2}>
            {institute}
          </Text>
          <Flex alignItems="center" justifyContent={{ base: "center", md: "flex-start" }} color="whiteAlpha.500" fontSize="sm">
            <LocationOnIcon style={{ fontSize: "16px", marginRight: "4px" }} />
            <Text>{location}</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
