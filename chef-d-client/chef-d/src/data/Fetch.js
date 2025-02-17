import React from "react";
import { useState } from "react";

const API_URL = "http://localhost:8080/api/"

export const GetBreakfast = () => {
    const [breakfastItems, setBreakfastItems] = useState([])
    fetch(API_URL + 'breakfast-items')
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => setBreakfastItems(data))
        .then(console.log(breakfastItems))
        return breakfastItems;
};