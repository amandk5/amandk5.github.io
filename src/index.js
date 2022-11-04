import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // styles: {
  //   global: {
  //     // styles for the `body`
  //     body:{
  //       FontFace: `'Calibri', sans-seriff`
  //     }
  //   },
  // },
  fonts: {
    // body:`'Poppins', sans-serif`,
    body: `"eurostile", sans-serif`,
    text: `"europa", sans-serif`,
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
      // footer: "#0E2431",
      footer:"#EDF2F8",
      hoverBlack:'#141C3A',
      themeColor: "#0284c7",
      projectCardTopBottom:"teal",
      backgroundColr:"#EDF2F8",
      headerBg:"#EDF2F8"
    },
  },
  components: {
    Drawer: {
      sizes: {
        xs:{
          width:"50px"
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
