import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from "../api/order";

import CheckoutForm from '../orders/CheckoutForm';

// devCat's publishable key
const stripePromise = loadStripe(
  'pk_test_51LGO25J0De5S2BwxtNSp0yGpXK7bRGe475uYsBdLccGVPbf7zDtQMTSHHUBQLoGJMRphPubYQf7deuIyVtls5Dw900ZacHe3vj',
);

export default function CheckoutPage({ productId }) {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // from chatroom > click pay now > load this page and run this function
    // Create PaymentIntent as soon as the page loads
    const getClientSecret = async () => {
      const res = await createPaymentIntent(productId);
      setClientSecret(res?.data?.clientSecret);
    };
    getClientSecret();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="max-w-screen min-w-screen flex justify-center h-screen items-center">
      <div className="w-1/2 h-1/2">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise} key={clientSecret}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
    </div>
  );
}
