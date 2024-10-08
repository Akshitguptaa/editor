import { useRef, useState } from "react";
import { Box, Flex, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { Editor, monaco } from "@monaco-editor/react";
import LangSelect from "./langselector";
import { SNIPPET } from "../config";
import Output from "./output";

const Ceditor: React.FC = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [val, setVal] = useState<string>(SNIPPET.python);
  const [lang, setLang] = useState<string>("python");

  const mount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const selectLang = (language: string) => {
    setLang(language);
    setVal(SNIPPET[language]);
  };

  return (
    <Box p={6} minH="100vh" bg="gray.900" color="gray.300">
      <Heading as="h1" size="2xl" textAlign="center" mb={4}>
        Online Code Editor
      </Heading>
      <Text textAlign="center" mb={8}>
        Write, run, and test your code in various languages!
      </Text>
      <Flex direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="1" mr={{ md: 4 }} mb={{ base: 4, md: 0 }} bg="gray.800" borderRadius="md" boxShadow="md" p={4}>
          <Stack spacing={4}>
            <Flex justify="space-between" align="center">
              <LangSelect language={lang} onSelect={selectLang} />
              <Button colorScheme="teal" onClick={() => setVal(SNIPPET[lang])}>
                Reset Snippet
              </Button>
            </Flex>
            <Editor
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                roundedSelection: true,
                automaticLayout: true,
              }}
              height="75vh"
              theme="vs-dark"
              language={lang}
              value={val}
              onMount={mount}
              onChange={(newValue) => setVal(newValue || "")}
            />
          </Stack>
        </Box>
        <Box flex="1" bg="gray.800" borderRadius="md" boxShadow="md" p={4}>
          <Output editorRef={editorRef} language={lang} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Ceditor;
