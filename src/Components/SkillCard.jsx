import { background, color, Flex, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function SkillCard({ skill, icon }) {

  return (
    <GridItem
      w="100%"
      p="2"
      margin="auto"
      // border="1px solid gainsboro"
      borderRadius="0.25rem"
      background="white"
      _hover={{ color: "white", background: "brand.hoverBlack" }}
    >
      <Flex justifyContent="center">
        <img src={icon} alt={skill} width="48px" height="48px"/>
      </Flex>
      <Text mt="2">{skill}</Text>
    </GridItem>
  );
}
