import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import './shop.styles.scss';

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} /> 
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>  

    </div>
);

export default ShopPage;
