import React, { useEffect } from 'react';
import { updateOrderStatus } from '../../../api/order';

export default function UpdateOrder() {
  const orderId = 8;
  //   useEffect(() => {}, []);

  // const handleDevUpdate = async () => {
  //   switch (order.status) {
  //     case 'pending': {
  //       if (order.paymentStatus === 'awaitingPayment') {
  //         return;
  //       }
  //       await updateOrderStatus({ status: 'Inprogress' }, orderId);
  //       break;
  //     }
  //     case 'Inprogress': {
  //       await updateOrderStatus({ status: 'awaitingReview' }, orderId);
  //       break;
  //     }
  //   }
  // };

  //จริงๆลูกค้าก็ควรกดcancelได้?

  return (
    <div>
      <div>
        {/* <button className="btn btn-info" onClick={() => handleDevUpdate()}>
          Dev Update
        </button> */}
      </div>
    </div>
  );
}
