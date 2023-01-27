import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.153:8888",
});

export default instance;
