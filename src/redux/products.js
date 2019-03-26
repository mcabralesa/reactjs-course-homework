import * as ActionTypes from "./ActionTypes";
const DEFAULT_STATE = {
  isLoading: true,
  errMess: null,
  products: [],
  selectedProducts: [],
  addProductModal: false
};

export const products = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        products: action.payload,
        addProductModal: false
      };

    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case ActionTypes.PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        products: [],
        addProductModal: false
      };

    case ActionTypes.PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        addProductModal: false
      };

    case ActionTypes.SELECT_PRODUCT:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.product],
        addProductModal: false
      };

    case ActionTypes.UNSELECT_PRODUCT:
      return {
        ...state,
        selectedProducts: [
          ...state.selectedProducts.filter(p => p !== action.product)
        ],
        addProductModal: false
      };

    case ActionTypes.OPEN_MODAL:
      return { ...state, addProductModal: true };

    case ActionTypes.CLOSE_MODAL:
      return { ...state, addProductModal: false };

    default:
      return state;
  }
};
