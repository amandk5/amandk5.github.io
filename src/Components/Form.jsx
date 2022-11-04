import {
    Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import send from "../Images/others/send.png";

export default function Form() {
  return (
    <FormControl w="70%" margin="auto">
      <Input background="white" type="text" placeholder="Your Name" mb="4" />
      <Input background="white" type="email" placeholder="Your Email Addresss" mb="4" />
      <Textarea background="white" placeholder="Type your message..." size="lg" mb="4" />
      <Button bg="white" color="black" _hover={{"color":"white", "background":"black"}}>
        <Flex gap="2" alignItems="center">
          <Box>
            <Image src={send} w="24px" h="24px"/>
          </Box>
          <Text>Send</Text>
        </Flex>
      </Button>
    </FormControl>
  );
}
