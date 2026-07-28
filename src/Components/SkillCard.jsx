import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skill, icon }) {
  return (
    <Box
      as={motion.div}
      whileHover={{ y: -8, scale: 1.05 }}
      transition="0.2s"
      bg="rgba(255, 255, 255, 0.03)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.05)"
      borderRadius="xl"
      p={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)"
      _hover={{
        borderColor: "brand.themeColor",
        boxShadow: "0 0 20px rgba(14, 165, 233, 0.2)",
        bg: "rgba(255, 255, 255, 0.06)"
      }}
    >
      <Image src={icon} w="50px" h="50px" objectFit="contain" filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.3))" />
      <Heading size="md" color="whiteAlpha.900" fontWeight="600" letterSpacing="wide">
        {skill}
      </Heading>
    </Box>
  );
}
