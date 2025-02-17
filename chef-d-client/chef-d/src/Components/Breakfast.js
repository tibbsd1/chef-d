import React, { useContext } from "react";
import { MenuItemContext } from "../App";
import { getBreakfast } from "../data/Fetch";


const Breakfast = () => {

    const { bkItems, addToCart, cartItems } = useContext(MenuItemContext);
    const breakfastMenu = Object.entries(bkItems)
    const addItemCart = (item) => {
        addToCart(item)
        stringOrder(cartItems)
    };
    const stringOrder = (item) => {
        localStorage.setItem("item", JSON.stringify(item));
    }
    return (
        <div>
            {breakfastMenu.map((bm, i) => (
                <section key={i} className="box">
                    <h1 className="title is-4">{bm[0]}</h1>
                    {bm[1].map((item, i) => (
                        <div key={i} className="card mb-4 pb-4">
                            <div className="card-header">
                                <p className="card-header-title">{item.item}</p>
                                <span className="tag is-size-4 card-header-icon">{`$${item.price}`}</span>
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
                    ))}
                </section>
            ))
            }
        </div >
    )
}

export default Breakfast;