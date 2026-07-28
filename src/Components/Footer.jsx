import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

import email from "../Images/others/email.png";
import phone from "../Images/others/phone.png";
import Form from "./Form";
import LinkedInAndGithub from "./LinkedInAndGithub";

export default function Footer() {
  return (
    <Box padding={{ base: "2rem 1rem", md: "4rem 2rem" }} bg="brand.footer" id="contact">
      <Flex 
        direction={{ base: "column", md: "row" }}
        justifyContent="center" 
        alignItems="center"
        gap={{ base: 6, md: 8 }}
        mb={10}
      >
        <Heading as="b" color="brand.themeColor" fontSize={{ base: "3xl", md: "4xl" }} textAlign="center" m={0}>
          Reach Out To Me
        </Heading>
        <Flex>
          <LinkedInAndGithub />
        </Flex>
      </Flex>
      <Flex justifyContent="center" gap="5" flexWrap="wrap">
        <Box
          color="white"
          background="brand.themeColor"
          py="3"
          px="4"
          borderRadius="0.5rem"
        >
          <Flex justifyContent="center" alignItems="center" gap="2">
            <img src={email} alt={email} width="32px" height="32px" />
            <Text letterSpacing="1px">adkofficial01@gmail.com</Text>
          </Flex>
        </Box>
        <Box
          color="white"
          background="brand.themeColor"
          py="3"
          px="4"
          borderRadius="0.5rem"
        >
          <Flex justifyContent="center" alignItems="center" gap="2">
            <img src={phone} alt={phone} width="32px" height="32px" />
            <Text letterSpacing="1px">+91-7389325639</Text>
          </Flex>
        </Box>
      </Flex>
      <br />
      <br />
      {/* form to send message */}
      <Form />
    </Box>
  );
}
