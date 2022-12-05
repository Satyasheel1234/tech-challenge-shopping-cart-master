import { addToCart, emptyCart, removeToCart } from "../store/modules/redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../store/modules/redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { RootState } from "../store/rootReducer";

import Soup from "../assets/soup.jpeg";
function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state: RootState) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
  return (
    <div>
      <div>
        <br />
        <button type="button" className="btn btn-primary" onClick={() => dispatch(emptyCart())}>
          Clear Cart
        </button>
      </div>
      <div className="product-container">
        {data.map((item, i) => (
          <div className="product-item " key={i}>
            <img src={Soup} alt="" />

            <div>Name : {item.name} </div>
            <div>customerPrice : {item.customerPrice} </div>
            <div>cost : {item.cost} </div>
            <div>
              <button type="button" className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button type="button" className="btn btn-danger" onClick={() => dispatch(removeToCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
