import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const ProductContext = createContext({});

export const ProductsProvider = ({children}) =>  {
    const [products] = useState([]);

    useEffect(()=> {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap();
    }, []);

    const value = { products };
    return(
        <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
    )
}  