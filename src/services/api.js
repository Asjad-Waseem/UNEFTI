import endPoints from "../config/apiConfig";
import config from "../config/config.json";

//api's for user journey

//signin
export const login = (userCredentials) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-Shoptype-PlatformId": config.PLATFORM_ID,
    },
    body: JSON.stringify(userCredentials),
  };
  const url = endPoints.login();
  return fetch(url, reqObj).then((resp) => resp.json());
};

export const socialLogin = (info) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-Shoptype-PlatformId": config.PLATFORM_ID,
    },
    body: JSON.stringify(info),
  };
  const url = endPoints.socialLogin();
  return fetch(url, reqObj).then((resp) => resp.json());
};

//signup
export const signup = (userInfo) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "X-Shoptype-PlatformId": config.PLATFORM_ID,
    },
    body: JSON.stringify(userInfo),
  };
  const url = endPoints.signup();
  return fetch(url, reqObj).then((resp) => {
    if (resp.ok || resp.status === 400) return resp.json();
    return Promise.reject(resp);
  });
};

export const registerVendor = (authedUser) => {
  const vendorDetails = {
    name: authedUser.data.name,
    productCategories: ["NFT"],
    url: "www.testvendor.com",
    timestamp: 1618022863105,
  };
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: authedUser.data.token,
    },
    body: JSON.stringify(vendorDetails),
  };
  const url = endPoints.registerVendors();
  return fetch(url, reqObj).then((resp) => {
    if (resp.ok)
      return resp.json().then((resp) => ({
        status: 200,
        response: resp,
      }));
    else
      return resp.json().then((resp) => ({
        status: 400,
        response: resp,
      }));
  });
};

export const discoverVendor = (text) => {
  let reqObj = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      authorization: config.NETWORK_TOKEN,
    }
  };
  const url = endPoints.discoverVendor(text);
  return fetch(url, reqObj).then((resp) => resp.json());
};

export const inviteVendor = (vendorId) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      authorization: config.NETWORK_TOKEN,
    }
  };
  const url = endPoints.inviteVendor(vendorId);
  return fetch(url, reqObj).then((resp) => resp.json());
};

export const authToken = (loginToken) => {
  let reqObj = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: loginToken,
    },
    body: JSON.stringify({
      userType: "vendor",
    }),
  };
  const url = endPoints.getAuthToken();
  return fetch(url, reqObj).then((resp) => resp.json());
};
