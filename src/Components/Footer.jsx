import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import email from "../Images/others/email.png";
import phone from "../Images/others/phone.png";
import Form from "./Form";

export default function Footer() {
  return (
    <Box padding="1rem" bg="brand.footer" id="footer">
      <br />
      <Heading as="b" color="brand.themeColor">
        Reach Out To Me
      </Heading>
      <br />
      <br />
      <br />
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
            <Text>adkofficial01@gmail.com</Text>
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
            <Text>+91-1234567890</Text>
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
