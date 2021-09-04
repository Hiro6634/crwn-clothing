import React,{ Component}  from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import './shop.styles.scss';
import { connect } from 'react-redux';

class ShopPage extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);

        });
    } 

    render(){
        const {match} = this.props; 

        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} /> 
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>  
        
            </div>
        );
    } 
}  

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
