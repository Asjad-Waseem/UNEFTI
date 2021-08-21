import { createStore, combineReducers } from 'redux'

const initialState = {

  product:"",
  getproducts:[],
  getvendors:[],
  getexplore:[],
  getHotcollection:[],
  authtoken:''

}
const changeState = (state = initialState, action) => {
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
    const reducers = combineReducers({
        changeState,
});
//   const store = createStore(changeState)
  export default reducers;


// export default reducers;