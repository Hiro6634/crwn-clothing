import './cart-item.styles.scss';

const CartItem = ({Item}) => {
    const {name, quantity} = Item;
    return(
        <div className='cart-item-container'>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    );
}

export default CartItem;