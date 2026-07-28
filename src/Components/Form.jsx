import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";

import send from "../Images/others/send.png";

export default function Form() {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://getform.io/f/e332314a-0752-44d2-8094-9c8c449db095",
        emailData
      )
      .then(() => alert("Message sent successfully to adkofficial01@gmail.com"))
      .catch((err) => {
        alert("failed to send the message");
        console.log(err);
      });
  };

  const inputStyles = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "whiteAlpha.900",
    _placeholder: { color: "whiteAlpha.500" },
    _hover: { borderColor: "brand.themeColor" },
    _focus: { borderColor: "brand.themeColor", boxShadow: "0 0 0 1px #0ea5e9" },
    letterSpacing: "1px",
    mb: "4",
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl w={{ base: "90%", md: "70%" }} margin="auto">
        <Input
          required
          type="text"
          placeholder="Your Name"
          value={emailData.name}
          onChange={({ target }) =>
            setEmailData({ ...emailData, name: target.value })
          }
          {...inputStyles}
        />
        <Input
          required
          type="email"
          placeholder="Your Email Address"
          value={emailData.email}
          onChange={({ target }) =>
            setEmailData({ ...emailData, email: target.value })
          }
          {...inputStyles}
        />
        <Textarea
          required
          placeholder="Type your message..."
          size="lg"
          value={emailData.message}
          onChange={({ target }) =>
            setEmailData({ ...emailData, message: target.value })
          }
          {...inputStyles}
        />
        <Button
          type="submit"
          bg="brand.themeColor"
          color="white"
          _hover={{ bg: "blue.400", transform: "translateY(-2px)" }}
          transition="0.2s ease"
          w="full"
          py={6}
        >
          <Flex gap="2" alignItems="center">
            <Box>
              <Image src={send} w="20px" h="20px" filter="brightness(0) invert(1)" />
            </Box>
            <Text fontWeight="600" fontSize="md">Send Message</Text>
          </Flex>
        </Button>
      </FormControl>
    </form>
  );
}
