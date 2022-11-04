import { Container } from "@chakra-ui/react";
import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <Container maxW="4xl" padding="10px 5px" id="top">
      <Navbar />
      <Content />
      <Footer />
    </Container>
  );
}
