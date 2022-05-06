import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({});

export const ProductsProvider = ({children}) =>  {
    const [products] = useState(PRODUCTS);
    const value = { products };
    return(
        <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
    )
}  