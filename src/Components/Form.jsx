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

  return (
    <form onSubmit={handleSubmit}>
      <FormControl w="70%" margin="auto">
        <Input
          required
          // name="name"
          letterSpacing="1px"
          background="white"
          type="text"
          placeholder="Your Name"
          mb="4"
          value={emailData.name}
          onChange={({ target }) =>
            setEmailData({ ...emailData, name: target.value })
          }
        />
        <Input
          required
          // name="email"
          letterSpacing="1px"
          background="white"
          type="email"
          placeholder="Your Email Addresss"
          mb="4"
          value={emailData.email}
          onChange={({ target }) =>
            setEmailData({ ...emailData, email: target.value })
          }
        />
        <Textarea
          required
          // name="message"
          letterSpacing="1px"
          background="white"
          placeholder="Type your message..."
          size="lg"
          mb="4"
          value={emailData.message}
          onChange={({ target }) =>
            setEmailData({ ...emailData, message: target.value })
          }
        />
        <Button
          type="submit"
          bg="white"
          color="black"
          _hover={{ color: "white", background: "black" }}
        >
          <Flex gap="2" alignItems="center">
            <Box>
              <Image src={send} w="24px" h="24px" />
            </Box>
            <Text>Send</Text>
          </Flex>
        </Button>
      </FormControl>
    </form>
  );
}
