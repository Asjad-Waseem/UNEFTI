const initialState = {

  product:"",
  getproducts:[],
  getvendors:[],
  getexplore:[],
  getHotcollection:[],
  getProfileproducts:[],
  authtoken:''

}
const otherStuff = (state = initialState, action) => {
    switch (action.type) {

      case "addproduct": {

        return {
          ...state,
          product: action.productData,
        };
      }
      case "products": {

        return {
          ...state,
          getproducts: action.products,
        };
      }
      case "Profileproducts": {

        return {
          ...state,
          getProfileproducts: action.profileproducts,
        };
      }
      case "vendors": {

        return {
          ...state,
          getvendors: action.vendors,
        };
      }
      case "explore": {

        return {
          ...state,
          getexplore: action.explore,
        };
      }
      case "hotCollection": {

        return {
          ...state,
          getHotcollection: action.hotCollection,
        };
      }
      case "tokenCase": {
        console.log(action.tokensdata,'tokeb data hwh')

        return {
          ...state,
          authtoken: action.tokensdata,
        };
      }

      default:
        return {
          ...state,
        };
    }
  }

  export default otherStuff;