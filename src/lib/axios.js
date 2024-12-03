import axios from "axios";
const BASE_URLV3 = "https://api-staging.cakap.com/v3/selfpaced";

const BASE_URLV2 = "https://api-staging.cakap.com/v2/selfpaced";

const axiosInstance = axios.create({
  baseURL: BASE_URLV3,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
