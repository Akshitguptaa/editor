import { useState } from "react";

import { Box, Button, Text, useToast, Flex, Heading, Spinner } from "@chakra-ui/react";
import executeCode from "../api";

interface OutputProps {
  editorRef: React.RefObject<any>;
  language: string;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const toast = useToast();
  const [out, setOut] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const run = async () => {
    const code = editorRef.current?.getValue();
    if (!code) return;
    try {
      setLoading(true);
      const { run: result } = await executeCode(language, code);
      setOut(result.output.split("\n"));
      setError(!!result.stderr);
    } catch (err) {
      console.log(err);
      toast({
        title: "An error occurred.",
        description: (err as Error).message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="gray.800" borderRadius="md" p={4} boxShadow="md">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h2" size="lg" color="white">
          Output
        </Heading>
        <Button variant="outline" colorScheme="green" isLoading={loading} onClick={run} width="10rem">
          {loading ? <Spinner size="sm" /> : "Run Code"}
        </Button>
      </Flex>
      <Box height="75vh" p={2} color={error ? "red.400" : "white"} border="1px solid" borderRadius="md" borderColor={error ? "red.500" : "#333"} overflowY="auto">
        {out ? out.map((line, i) => <Text key={i}>{line}</Text>) : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;