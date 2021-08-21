import { axiosClient } from '../helper';
import { NotificationManager } from "react-notifications";
import axios from "axios";


// function addProductAction(data) {
//     return {
//       type: "addproduct",
//       productData:data
//     };
//   }
export function addProduct(data) {
    console.log(data)

    return async () => {
      try {
        const res = await axiosClient().post(`store/manual/product`, data);
        alert(res.data.message);

        // dispatch(
        //     addProductAction(
        //     res.data,
        
        //   )
        // );
      } catch (err) {
        console.log(err);
        alert(err.data.message);

      }
    };
  }

  function getProductsAction(data) {
    return {
      type: "products",
      products:data
    };
  }
export function getProducts() {


    return async (dispatch) => {
      try {
        const res = await axiosClient().get(`platforms/075fbd22-012c-cc3e-a382-f4147380402f/products`);
        NotificationManager.success("products Found");

        dispatch(
          getProductsAction(
            res.data.products,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  function getVendorsAction(data) {
    return {
      type: "vendors",
      vendors:data
    };
  }
export function getVendors() {


    return async (dispatch) => {
      try {
        const res = await axiosClient().get(`platforms/075fbd22-012c-cc3e-a382-f4147380402f/vendors`);

        dispatch(
          getVendorsAction(
            res.data,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  function exploreAction(data) {
    return {
      type: "explore",
      explore:data
    };
  }
export function explore() {


    return async (dispatch) => {
      try {
        const res = await axiosClient().get(`platforms/075fbd22-012c-cc3e-a382-f4147380402f/products?maxRange=2&currency="ETH"`);

        dispatch(
          exploreAction(
            res.data.products,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  function hotCollectionAction(data) {
    return {
      type: "hotCollection",
      hotCollection:data
    };
  }
export function hotCollection() {


    return async (dispatch) => {
      try {
        const res = await axiosClient().get(`platforms/075fbd22-012c-cc3e-a382-f4147380402f/products?maxRange=2&currency="ETH"`);

        dispatch(
          hotCollectionAction(
            res.data.products,
        
          )
        );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  // function signupAction(data) {
  //   return {
  //     type: "signup",
  //     hotCollection:data
  //   };
  // }
export function signup(data) {

  const rid = "607274ee0cb35c0b894cb2bc";

    return async (dispatch) => {
      try {
        const res = await axiosClient().post(`register?rid=${rid}`,data);
        alert(res.data.message);
        // dispatch(
        //   signupAction(
        //     res.data.products,
        
        //   )
        // );
      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  function getToken(data) {
    console.log(data,"data here")
    return {
      type: "tokenCase",
      tokensdata:data
    };
  }

  function getUserToken(token)  {

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    };
    return async (dispatch) => {
      try {
    const res = await axios.post('https://dev-backend.shoptype.com/authenticate', {
      "userType": "vendor"
    } , options)
    localStorage.setItem("token", res.data.token)
    dispatch(getToken(res.data.token));
    window.location.href = "/product"

      } catch (err) {
        console.log(err);
        NotificationManager.error(err.response?.data.message);
      }
    };
  }
  export function getUserFromSocialLogin(info) {
  const rid = "607274ee0cb35c0b894cb2bc";

    return async (dispatch) => {
      try {
        const res = await axiosClient().post(`social-login?rid=${rid}`,info);
          dispatch(getUserToken(res.data.token));
      } catch (err) {
        console.log(err);
        alert("Something Went Wrong")

        NotificationManager.error(err.response?.data.message);
      }
    };
  }
export function getUser(data) {


    return async (dispatch) => {
      try {
        const res = await axiosClient().post(`/login`,data);
        NotificationManager.success(res.data.msg);

          dispatch(getUserToken(res.data.data.token));
      } catch (err) {
        console.log(err);
        alert("Something Went Wrong")

        NotificationManager.error(err.response?.data.message);
      }
    };
  }