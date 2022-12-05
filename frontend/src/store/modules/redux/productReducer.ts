import { SET_PRODUCT_LIST } from "./constant";
import {Product} from '../redux/Iproduct'

export const productData = (data = [], action:Product) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      if (action.data.length > 1) {
        return [...action.data];
      } else {
        return [action.data];
      }

    default:
      return data;
  }
};
