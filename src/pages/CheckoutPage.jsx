import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../api/order';

import CheckoutForm from '../orders/CheckoutForm';
import { useOrder } from '../contexts/OrderContext';
import { useAuth } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';

// devCat's publishable key
const stripePromise = loadStripe(
  'pk_test_51LGO25J0De5S2BwxtNSp0yGpXK7bRGe475uYsBdLccGVPbf7zDtQMTSHHUBQLoGJMRphPubYQf7deuIyVtls5Dw900ZacHe3vj',
);

export default function CheckoutPage({ orderId }) {
  const { orderId } = useParams();
  console.log(orderId);
  const [clientSecret, setClientSecret] = useState('');
  const { user } = useAuth();

  // const orderId = useOrder();
  useEffect(() => {
    const getClientSecret = async () => {
      const res = await createPaymentIntent({ orderId: orderId });
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
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 h-1/2">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise} key={clientSecret}>
            <CheckoutForm clientSecret={clientSecret} orderId={orderId} />
          </Elements>
        )}
      </div>
    </div>
  );
}
