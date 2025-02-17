import React, { useEffect, useState, useContext } from "react";
import { MenuItemContext } from "../App";

const MenuDisplay = ({ urlRoute }) => {

    const API_URL = "http://localhost:8080/api/"
    const [items, setItems] = useState([]);
    const { addToCart, cartItems } = useContext(MenuItemContext);


    const fetchInfo = async () => {
        const res = await fetch(API_URL + urlRoute)
        const data = await res.json();
        setItems(data)
        console.log('items: ', items)
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    const addItemCart = (item) => {
        const cart = addToCart(item)
        stringOrder(cart)
    };
    
    const stringOrder = (item) => {
        localStorage.setItem("item", JSON.stringify(item));
    }

    return (
        <div>
            <div>
                {
                    items.map((item, i) => (
                        <section key={i} className="box">
                            <div key={i} className="card mb-4 pb-4">
                            <div className="card-header">
                                <p className="card-header-title">{item.item_name}</p>
                                <span className="tag is-size-5 card-header-icon">{`$${item.price}`}</span>
                            </div>
                            <div className="card-content">
                                <img className="card-image container" src={`${process.env.PUBLIC_URL}/assets/logo-printed.webp`} alt="Succulent" />
                            </div>
                            {item.description === "" ? <span className="p-3"></span> :
                                <p className="subtitle is-6 pl-3 has-text-left">{item.description}</p>
                            }
                            <div className="level pl-3">
                                <span className="level-item has-text-centered">
                                    <button className="button is-rounded is-focused is-danger has-text-weight-bold" onClick={() => addItemCart(item)}>Add to Cart
                                    </button>
                                </span>
                            </div>
                        </div>
                        </section>
                    ))
                }
            </div>
        </div>
    )

};

export default MenuDisplay;