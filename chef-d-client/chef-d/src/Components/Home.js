import React from "react";
import MenuDisplay from "./Menu-Display";

export default function Home() {
    const fetchStrings = ['pancakes', 'french-toast', 'geno-specials', 'breakfast-specials', 'omelets', 'appetizers', 'salads', 'entrees', 'chimichanga', 'tacos', 'tortas', 'burritos', 'burgers', 'quesadillas', 'signature-dishes', 'sandwiches', 'drink-items']
    
    return (
        <>
            <h1 className='title'>Order Online</h1>
            {
                fetchStrings.map((string, i) => (
                    <MenuDisplay 
                    key={i}
                    urlRoute={string}
                    />

                ))
            }
        </>
    )
}