
import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../config/baseUrl'


export const fetchProducts = (dispatch) => {
  dispatch(productsLoading());

  return fetch(baseUrl + 'products')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  // .then(products => dispatch(addProducts(products)))
  .then(products => {
    setTimeout(() => {
      dispatch(addProducts(products))
    }, 2000)
  })
  .catch(error => dispatch(productsFailed(error.message)));
}

export const productsLoading = () => ({
  type: ActionTypes.PRODUCTS_LOADING
})

export const productsFailed = (errmess) => ({
  type: ActionTypes.PRODUCTS_FAILED,
  payload: errmess
})

export const addProducts = (products) => ({
  type: ActionTypes.ADD_PRODUCTS,
  payload: products
})

export const addProduct = (product) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: product
})

export const selectProduct = product => ({
  type: ActionTypes.SELECT_PRODUCT,
  product
})

export const unSelectProduct = product => ({
  type: ActionTypes.UNSELECT_PRODUCT,
  product
})

export const openAddProductModal = () => ({
  type: ActionTypes.OPEN_MODAL
})

export const closeAddProductModal = () => ({
  type: ActionTypes.CLOSE_MODAL
})