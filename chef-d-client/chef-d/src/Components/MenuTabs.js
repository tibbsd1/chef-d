import React from "react";
import { Link } from "react-router-dom";

const MenuTabs = () => {
    return (
        <div className="tabs is-centered is-large">
            <ul>
                <li><Link reloadDocument to="/breakfast">Breakfast</Link></li>
                <li><Link reloadDocument to='/lunch'>Lunch</Link></li>
                <li><Link reloadDocument to="/drinks">Drinks</Link></li>
            </ul>
        </div>
    )
}

export default MenuTabs;