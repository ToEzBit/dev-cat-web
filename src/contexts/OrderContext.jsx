import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { createPaymentIntent } from '../api/order';

const OrderContext = createContext();
function OrderContextProvider({ children }) {
  const [orderId, setOrderId] = useState(0);
  return (
    <OrderContext.Provider value={{ setOrderId, orderId }}>
      {children}
    </OrderContext.Provider>
  );
}

const useOrder = () => {
  const ctx = useContext(OrderContext);
  return ctx;
};

export default OrderContextProvider;
export { useOrder };
