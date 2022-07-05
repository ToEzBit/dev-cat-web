import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { orderPayment } from '../api/order';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function CheckoutForm({ orderId }) {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);

  const paymentConfirmed = async (id) => {
    const res = await orderPayment({ transactionId: id }, +orderId);
    navigate('/');
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          paymentConfirmed(paymentIntent.id);
          setMessage(`Payment succeeded!, redirecting to homepage...`);
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          // console.log(message);
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          // console.log(message);
          break;
        default:
          setMessage('Something went wrong.');
          // console.log(message);
          break;
      }
    });
  }, [stripe]);

  const clientSecret = new URLSearchParams(window.location.search).get(
    'payment_intent_client_secret',
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // redirect ไปหน้านี้ถ้าข้อมูลบัตรถูกต้อง
        return_url: `${window.location.href}`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 justify-center"
    >
      <PaymentElement id="payment-element" />
      <button
        disabled={!stripe || !elements}
        id="submit"
        className="btn btn-md btn-info rounded-md"
      >
        <span id="button-text">Pay Now</span>
      </button>
      {message && (
        <div id="payment-message" className="mx-auto">
          {message}
        </div>
      )}
    </form>
  );
}

//use the following card number for testing
// 1. 4242424242424242 : successful payment(credit card)
// 2. 4000056655665556 : successful payment(debit card)
// 3. 4000000000000002 : generic decline
// 4. 4000000000009995 : insufficient fund decline
// 5. 4000000000009979 : stolen card decline
// 6. 4000000000000127 : incorrect ccv decline
// 7. 4000000000000119 : processing error decline
// 8. 4242424242424241 : incorrect number decline
//expiration date/cvc can be anything
