import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Card({ image, duration, course, institute, location }) {
  return (
    <>
      <Box
        borderBottom="2px solid gainsboro"
        borderRadius="0.5rem"
        p="5px"
        my="4"
        _hover={{ color: "white", background: "brand.themeColor" }}
      >
        <Flex alignItems="center" alignContent="center" gap="5" lineHeight="2">
          <Box>
            <Image src={image} w="40px" />
          </Box>
          <Box>
            <Text textAlign="left">{duration}</Text>
            <Heading size="md" textAlign="left">
              {course}
            </Heading>
            <Text textAlign="left">{institute}</Text>
            <Text textAlign="left">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/149/149060.png"
                w="15px"
                display="inline-block"
                pt="2px"
                mr="1"
              />
              {location}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
