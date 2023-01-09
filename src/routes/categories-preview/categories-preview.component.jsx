import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../context/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import './categories-previes.styles.scss';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    console.log('categoriesMap', categoriesMap);
    return (
        <Fragment>
        {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return(
                <CategoryPreview key={title} title={title} products={products}/>
            );
        })}
        </Fragment>
    );
};
export default CategoriesPreview;