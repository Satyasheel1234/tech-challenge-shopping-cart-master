import { combineReducers } from "redux";
import counterReducer from "./modules/counter/reducer";
import {productData} from "./modules/redux/productReducer";
import { cartData } from "./modules/redux/reducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  cartData,
  productData
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
