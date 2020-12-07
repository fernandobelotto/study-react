import React from "react";
import ReactDOM from "react-dom";
import MyHook from "./parte2/MyHook";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "./style.css";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#EDF2F7",
      200: "#EDF2F7",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MyHook />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
