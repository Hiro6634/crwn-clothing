import { createContext, useState, useEffect } from "react";

import { addCollectionsAndDocuments } from "../utils/firebase/firebase.utils.js";


export const ProductContext = createContext({});

export const ProductsProvider = ({children}) =>  {
    const [products] = useState([]);

    const value = { products };
    return(
        <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
    )
}  