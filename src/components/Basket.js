import { useContext } from "react";
import { ShopContext } from "../App";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Basket() {

    const shopItems = useContext(ShopContext);

    const [maxQty, setMaxQty] = useState("Sorry due to high demand theres only 5 items per customer");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const trolley = <FontAwesomeIcon className="fa-lg" icon={faCartShopping} onClick={handleShow} />




    return (
        <div>
            {trolley}
            {shopItems.itemNumber > 0 ? shopItems.itemNumber : false}
            <Modal show={show} onHide={handleClose}>
                {shopItems.maxQty !== "" ?
                    <div className="m-3 w-25 text-danger alert alert-secondary position-fixed z-index-1 top-50 start-0" role="alert">
                        <span >{shopItems.maxQty}</span>
                    </div>
                    : false}
                <Modal.Header closeButton>
                    <Modal.Title>C.Hooks</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>

                        {shopItems.basketItems.length > 0 ? (
                            shopItems.basketItems.map((item) => (
                                <div key={item.id} className="my-3">
                                    <div className="my-1 text-center">
                                        <h4>{item.name}</h4>
                                        <p>{item.scent}</p>

                                    </div>
                                    <div className="my-4 text-center">
                                        <p>picture</p>
                                    </div>
                                    <div>
                                        <p className="my-3 text-center">£{item.price.toFixed(2)}</p>
                                        <div className="d-flex justify-content-center ">
                                            <div className="w-25 d-flex justify-content-around align-items-center my-3">
                                                <button className="btn btn-outline-danger"
                                                    onClick={() => shopItems.basketDecrement(item.id)}>-</button>
                                                <p>{item.qty}</p>
                                                <button className="btn btn-outline-success "
                                                    onClick={() => shopItems.basketIncrement(item.id)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : (
                            <p>Your basket is empty.</p>
                        )}

                    </div>
                </Modal.Body>

                <Modal.Footer>
                    {shopItems.total === 0 ?
                        <Button variant="secondary" onClick={handleClose}>
                            Shop
                        </Button>
                        :
                        <div className="w-100 d-flex justify-content-around align-items-center">
                            <span>Total: £{shopItems.total.toFixed(2)}</span>
                            <Button variant="primary" onClick={handleClose}>
                                Checkout
                            </Button>
                        </div>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Basket