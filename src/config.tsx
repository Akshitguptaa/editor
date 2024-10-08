export const L_VERSION: Record<string, string> = {
  python: "3.10.0",
  cpp: "17.0.0",
    typescript: "5.0.3",
    javascript: "20.15.0",
    java: "15.0.2",
    csharp: "6.12.0",
  };
  
  export const SNIPPET: Record<string, string> = {
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout<<"HELLO WORLD";\n\treturn 0;\n}\n`,

    javascript: `\nfunction greet() {\n\tconsole.log("Hello, world" + "!");\n}\n\ngreet();\n`,
    
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "! in TypeScript");\n}\n\ngreet({ name: "user" });\n`,
    python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("user")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    csharp: 
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  };
  