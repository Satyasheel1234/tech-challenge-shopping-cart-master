import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { Link } from "react-router-dom";

export default function Modalpopup() {
  const cartData = useSelector((state: RootState) => state.cartData);
  let amount = cartData.length && cartData.map(item => item.customerPrice).reduce((prev, next) => prev + next);
  console.warn(amount);
  const result = useSelector((state: RootState) => state.cartData);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Link to="#">
        <div className="cart-div" onClick={handleShow}>
          <span>{result.length}</span>
          <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
        </div>
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h1>Cart Page</h1>
            <div className="cart-page-container">
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>CustomerPrice</td>
                    <td>Cost</td>
                  </tr>
                  {cartData.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.customerPrice}</td>
                      <td>{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="price-details">
                <div className="adjust-price">
                  <span>Amount</span>
                  <span>{amount}</span>
                </div>
                <div className="adjust-price">
                  <span>Discount</span>
                  <span>{amount / 10}</span>
                </div>
                <div className="adjust-price">
                  <span>Tax</span>
                  <span>000</span>
                </div>
                <div className="adjust-price">
                  <span>Total</span>
                  <span>{amount - amount / 10}</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
