import { Box } from "@chakra-ui/react";
import Ceditor from "./components/editor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Ceditor />
      <div className="text-lg text-center mt-6 text-white font-bold">
        MADE BY AKSHIT
      </div>
    </Box>
  );
}

export default App;