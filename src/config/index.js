// ***** Config *****
import axios from "axios";

// ***** Qualhub Instance *****
const qualhubInstance = axios?.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export { qualhubInstance };
