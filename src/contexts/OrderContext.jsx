import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { createPaymentIntent } from '../api/order';

const OrderContext = createContext();
function OrderContextProvider({ children }) {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
}

const useOrder = () => {
  const ctx = useContext(OrderContext);
  return ctx;
};

export default OrderContextProvider;
export { useOrder };
