import React, { useContext } from "react";
import { MenuItemContext } from "../App";


const Drinks = () => {
    const { dItems } = useContext(MenuItemContext);
    const drinkMenu = Object.entries(dItems);

    return (
        <div>
            {drinkMenu.map((bm, i) => (
                <section key={i} className="box">
                    <h1 className="title is-4" id="pancakes">{bm[0]}</h1>
                    {bm[1].map((item, i) => (
                        <div key={i} className="card mb-4 pb-4">
                            <div className="card-header">
                                <p className="card-header-title">{item.item}</p>
                                <span className="tag is-size-4 card-header-icon">{`$${item.price}`}</span>
                            </div>
                            <div className="card-content">
                                <img className="card-image container" src={`${process.env.PUBLIC_URL}/assets/logo-printed.webp`} />
                            </div>
                            {item.description === "" ? <span className="p-3"></span> :
                                <p className="subtitle is-6 pl-3 has-text-left">{item.description}</p>
                            }
                            <div className="level pl-3">
                                <span className="level-item has-text-centered">
                                    <button className="button is-rounded is-focused is-danger has-text-weight-bold">Add to Cart
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

export default Drinks;