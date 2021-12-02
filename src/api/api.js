import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:8088";

const baseAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 500000,
});

baseAxios.interceptors.request.use(
  (config) => {
    console.log(
      `Method: ${config.method.toUpperCase()}\n` +
      `URL: ${BASE_URL}${config.url}\n` +
      `Params: ${JSON.stringify(config.params)}\n` +
      `Time: ${new Date().toLocaleString()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const helicoptersApi = {
  getHelicopters: (filters) =>
    baseAxios.get("/helicopters", {
      params: {
        filters: filters,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    }),
  getHelicopterTypes: () => baseAxios.get("/helicopters/types"),
};

export default helicoptersApi;
