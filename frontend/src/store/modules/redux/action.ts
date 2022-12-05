import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
import { Product } from "../redux/Iproduct";
export const addToCart = (data: Product) => {
  return {
    type: ADD_TO_CART,
    data
  };
};

export const removeToCart = (data: Product) => {
  return {
    type: REMOVE_FROM_CART,
    data
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART
  };
};
