<<<<<<< HEAD
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
=======
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
>>>>>>> 6f1ac3e0dcd1de2b7d2203230ed2703cf16595de

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

<<<<<<< HEAD
import { FormContainer } from './payment-form.styles';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentButton, PaymentFormContainer } from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });
=======
import {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { 
    PaymentFormContainer, 
    FormContainer,
    PaymentButton,
} from './payment.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const paymentHandler = async (e) => {
        e.preventDefault();
        
        if(!stripe || !elements){
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
          }).then((res) => {
            return res.json();
          });

        const {
            paymentIntent: {client_secret},
         } = response;

         const paymentResult = await stripe.confirmCardPayment( client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.dispplayName : 'Guest',
                }
            }
         });

         setIsProcessingPayment(false);

         if( paymentResult.error){
             alert(paymentResult.error);
         } else {
             if( paymentResult.paymentIntent.status === 'succeeded'){
                 alert('Payment Successful');
             }
         }              
    }
    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}> 
                <h2>Credit Card Payment:</h2>
                <CardElement/>
                <PaymentButton 
                    disabled={isProcessingPayment} 
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                >
                    Pay now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
}
>>>>>>> 6f1ac3e0dcd1de2b7d2203230ed2703cf16595de

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Yihua Zhang',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;