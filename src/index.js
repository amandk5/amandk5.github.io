import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "#0b0f19",
        color: "whiteAlpha.900",
        fontFamily: "'Inter', sans-serif",
      },
      html: {
        scrollBehavior: "smooth",
      }
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: "#e0f2fe",
      100: "#bae6fd",
      500: "#0ea5e9", // Sky 500
      600: "#0284c7", // Sky 600
      900: "#0c4a6e",
      themeColor: "#0ea5e9", // Vibrant sky blue
      backgroundColr: "rgba(255, 255, 255, 0.03)",
      headerBg: "rgba(11, 15, 25, 0.7)", // Semi-transparent for glass effect
      cardBg: "rgba(255, 255, 255, 0.05)",
      cardHover: "rgba(255, 255, 255, 0.08)",
      footer: "rgba(255, 255, 255, 0.02)",
    },
  },
  components: {
    Drawer: {
      sizes: {
        xs: {
          width: "250px", // Increased from 50px for better usability
        },
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "-0.02em",
      }
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
