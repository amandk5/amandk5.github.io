import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./card.css";

export default function Card({ image, duration, course, institute, location }) {
  return (
    <>
      <Box
        borderBottom="2px solid gainsboro"
        borderRadius="0.5rem"
        p="5px"
        my="4"
        _hover={{ color: "white", background: "brand.themeColor" }}
        className="card"
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
            <Text
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              {/* <Image
                src="https://cdn-icons-png.flaticon.com/512/149/149060.png"
                w="15px"
                display="inline-block"
                pt="2px"
                mr="1"
                _hover={()=>setHovered(!hovered)}
              /> */}
              <LocationOnIcon className="locationIcon" />
              {location}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
