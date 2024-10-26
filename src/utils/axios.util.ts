import axios from "axios";
import Cookies from "js-cookie";

export default function createFetcher() {
  const token = Cookies.get("token");
  axios.defaults.baseURL = "https://origami-go.vercel.app";

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return axios;
}