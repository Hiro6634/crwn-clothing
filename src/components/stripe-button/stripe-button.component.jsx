import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JUkFqBlsFOz4bFJtVqfzHD7ouV9gtH8Vi9sMP0ooKiEyS9QBhJCpvytkXbDev9uYhc8GQFeOvlKosvMM60Mw2cw00QwgepO3R';

    const onToken = token =>{
         console.log('TOKEN: ', token);
        alert('Payment Successful');

    } 

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`} 
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}  
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;