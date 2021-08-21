import {
  login,
  socialLogin,
  authToken,
  registerVendor,
  discoverVendor,
  inviteVendor,
} from "../../services/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const SET_VENDOR_ID = "SET_VENDOR_ID";
export const LOG_OUT = "LOG_OUT";

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
}
export function Logout() {
  return {
    type: LOG_OUT,
  };
}

export function setAuthToken(authToken) {
  return {
    type: SET_AUTH_TOKEN,
    authToken,
  };
}

export function setVendorId(vendorId) {
  return {
    type: SET_VENDOR_ID,
    vendorId,
  };
}

export function getUser(userCredentials) {
  return (dispatch) => {
    return login(userCredentials).then((authedUser) => {
      dispatch(setAuthedUser(authedUser));
      if (authedUser.error == undefined) {
        authToken(authedUser.data.token).then((authToken) => {
          localStorage.setItem("token", authToken.token);
          return dispatch(setAuthToken(authToken));
        });
        return discoverVendor(authedUser.data.name.split(" ")[0]).then(
          (vendorRes) => {
            if (vendorRes.count == 0) {
              return registerVendor(authedUser).then((resp) => {
                if (resp.status !== 200) return alert(resp.response.message);
                else {
                  return discoverVendor(
                    authedUser.data.name.split(" ")[0]
                  ).then((response) => {
                    return inviteVendor(response.vendors[0].id).then(
                      (inviteVendorRes) =>{
                        authToken(authedUser.data.token).then((authToken) => {
                          localStorage.setItem("token", authToken.token);
                          return dispatch(setAuthToken(authToken));
                        });
                        return dispatch(setVendorId(response.vendors[0].id))
                      }
                    );
                  });
                }
              });
            } else
              return inviteVendor(vendorRes.vendors[0].id).then(
                (inviteVendorRes) =>{
                  authToken(authedUser.data.token).then((authToken) => {
                    localStorage.setItem("token", authToken.token);
                    return dispatch(setAuthToken(authToken));
                  });
                  return dispatch(setVendorId(vendorRes.vendors[0].id))
                }
              );
          }
        );
      }
    });
  };
}

export function getUserFromSocialLogin(info) {
  return (dispatch) => {
    return socialLogin(info).then((authedUser) => {
      dispatch(setAuthedUser(authedUser));
      if (authedUser.error == undefined) {
        authToken(authedUser.data.token).then((authToken) => {
          localStorage.setItem("token", authToken.token);
          return dispatch(setAuthToken(authToken));
        });
        return discoverVendor(authedUser.data.name.split(" ")[0]).then(
          (vendorRes) => {
            if (vendorRes.count == 0) {
              return registerVendor(authedUser).then((resp) => {
                if (resp.status !== 200) return alert(resp.response.message);
                else {
                  return discoverVendor(
                    authedUser.data.name.split(" ")[0]
                  ).then((response) => {
                    return inviteVendor(response.vendors[0].id).then(
                      (inviteVendorRes) =>{
                        authToken(authedUser.data.token).then((authToken) => {
                          localStorage.setItem("token", authToken.token);
                          return dispatch(setAuthToken(authToken));
                        });
                        return dispatch(setVendorId(response.vendors[0].id))
                      }
                       
                    );
                  });
                }
              });
            } else
              return inviteVendor(vendorRes.vendors[0].id).then(
                (inviteVendorRes) =>{
                  authToken(authedUser.data.token).then((authToken) => {
                    localStorage.setItem("token", authToken.token);
                    return dispatch(setAuthToken(authToken));
                  });
                  return dispatch(setVendorId(vendorRes.vendors[0].id))
                }
              );
          }
        );
      }
    });
  };
}
