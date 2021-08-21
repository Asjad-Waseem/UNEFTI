import axios from "axios";
// import Cookie from 'cookie-universal'

// const cookies = Cookie()

 export const BASE_URL = "https://backend.shoptype.com/";
//  export const BASE_URL = "https://9a9e8c4807ae.ngrok.io/";

export function axiosClient() {
  let defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      accept: "application/json",
    },
  };

  let instance = axios.create(defaultOptions);
  // axios.defaults.headers.common =  {'Authorization': `${localStorage.getItem("token")}`}

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    // const token = localStorage.getItem("token");
    // config.headers.Authorization = cookies.get("accessToken");
    // config.headers.common = {'authorization': `${localStorage.getItem("token")}`}
    config.headers.common = {'Authorization': `${localStorage.getItem("token")}`}

    return config;
  });

  // instance.defaults.headers.common[
  //   "Authorization"
  // ] = store.getState().mainStore.accessToken;

  return instance;
}
