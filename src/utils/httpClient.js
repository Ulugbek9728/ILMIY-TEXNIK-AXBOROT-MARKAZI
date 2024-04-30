import axios from "axios";

const axiosDefaults = () => {
  axios.defaults.baseURL = "http://api.csti.uz/";
};
const lang = localStorage.getItem("i18nextLng");


const getInstance = () => {
  axiosDefaults();
  const instance = axios.create({
    headers: {

    },
    params:{
      lang
    }
  });
  // instance.interceptors.request.use(config => config, error => {
  //     return Promise.reject(error)
  // });
  // instance.interceptors.response.use(response => response, error => {
  //     return Promise.reject(error)
  // });
  return instance;
};

export { getInstance };
