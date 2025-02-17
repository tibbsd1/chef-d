import React, { useContext, useEffect, useState } from "react";
import { MenuItemContext } from "../App";


const Checkout = () => {
    const { removeFromCart } = useContext(MenuItemContext);
    const [myCart, setMyCart] = useState(JSON.parse(localStorage.getItem("item")));
    const date = new Date();
    const getItemCount = (items) => {
        let count = 0;
        for (let i of items) {
            count++
        }
        return count
    };
    
    const postCheckout = () => {
        const cart = myCart.map(i => i.item_id)
        console.log(cart)
        const url = "http://localhost:8080/api/complete-orders";
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // OrderDate: date.toISOString().split('T')[0],
                // ItemCount: getItemCount(myCart),
                order_items: cart,
                // OrderType: 'Breakfast'
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log('No dice beybeh'))
    };

    const addPrice = myCart.map(c => parseFloat(c.price)).reduce((number, nextNumber) => number + nextNumber, 0);


    return (
        <div className="p-5">
            <p className="title">Your Order</p>
            {
                myCart.map((item, i) => (
                    <div key={i} className="level is-mobile">
                        <div className="level-left">
                            <div className="level-item">
                                <p className="mr-4">{i + 1}.</p><p className="has-text-weight-bold">{item.item}</p>
                            </div>
                        </div>
                        <div className="level-right">
                            <p className="level-item">{`$${item.price}`}</p>
                            <button className="delete is-small" onClick={() => removeFromCart(i, myCart, setMyCart)}></button>
                        </div>
                    </div>
                ))
            }
            <div className="level is-mobile button is-primary is-medium mt-6" onClick={postCheckout}>
                <div className="level-left">
                    <p className="level-item has-text-weight-bold has-text-light is-size-6">Checkout</p>
                </div>
                <div className="level-right">
                    <p className="level-item has-text-weight-bold tag is-medium is-primary has-text-light">{`$${addPrice.toFixed(2)}`}</p>
                </div>
            </div>


        </div>
    )
};

export default Checkout;