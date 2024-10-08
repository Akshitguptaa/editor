import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme"; 

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
