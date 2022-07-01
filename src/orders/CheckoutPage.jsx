import { useEffect, useState } from 'react';
import { useOrder } from '../contexts/OrderContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createPaymentIntent } from '../api/order';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51LGO25J0De5S2BwxtNSp0yGpXK7bRGe475uYsBdLccGVPbf7zDtQMTSHHUBQLoGJMRphPubYQf7deuIyVtls5Dw900ZacHe3vj',
);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const getClientSecret = async (items = 1) => {
      const res = await createPaymentIntent(items);
      setClientSecret(res);
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
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
