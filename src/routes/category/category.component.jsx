import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { CategoriesContext } from '../../context/categories.context';

import './category.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return(
        <div className='categort-container'>
            {products && 
             products.map((product)=>( <ProductCard key={product.id} product={product}/>
             ))}
        </div>
    );
}

export default Category;