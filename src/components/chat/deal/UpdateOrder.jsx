import React from 'react';
import { updateOrderStatus,  } from '../../../api/order';

export default function UpdateOrder() {
  //order fetch จากหลังบ้าน

  handleDevUpdate = () => {
    switch (order.status) {
      case 'pending': {
        if (order.paymentStatus === 'awaitingPayment') {
          return;
        }
        await updateOrderStatus({ status: Inprogress }, orderId);
        break;
      }
      case 'Inprogress': {
        await updateOrderStatus({ status: awaitingReview }, orderId);
        break;
      }
    }
  };

  //จริงๆลูกค้าก็ควรกดcancelได้?
  handleCancel = async () => {
    await updateOrderStatus({status: cancelled}, orderId)
  };

  return (
    <div>
      <div>
        <button className="btn btn-info" onClick={() => handleDevUpdate()}>
          Dev Update
        </button>
      </div>
      <div>
        <button className="btn btn-info" onClick={() => handleComplete()}>
          complete
        </button>
      </div>
      <div>
        <button className="btn btn-info" onClick={() => handleRevision()}>
          revision
        </button>
      </div>
      <div>
        <button className="btn btn-info" onClick={() => handleCancel()}>
          Cancel
        </button>
      </div>
    </div>
  );
}
