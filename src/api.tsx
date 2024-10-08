import axios from "axios";
import { L_VERSION } from "./config";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

const executeCode = async (language: string, sourceCode: string): Promise<any> => {
  try {
    const response = await API.post("/execute", {
      language,
      version: L_VERSION[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export default executeCode;