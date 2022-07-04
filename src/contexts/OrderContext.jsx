import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { getUserOder } from '../api/order';
import { useAuth } from './AuthContext';

const OrderContext = createContext();
function OrderContextProvider({ children }) {
  const { user } = useAuth();
  const [orderId, setOrderId] = useState(0);
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    const getMyOrder = async () => {
      const res = await getUserOder();
      setMyOrder(res);
    };
    user && getMyOrder();
  }, [user]);

  return (
    <OrderContext.Provider value={{ setOrderId, orderId, myOrder }}>
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
