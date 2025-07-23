import axios from "axios";

const apis = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASED_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default apis;
