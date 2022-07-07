import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { getDevOderById, getUserOderById } from '../../../api/order';

export default function Step({ order, currentValue, setCurrentValue }) {
  const formatTime = (dateTime) => {
    return DateTime.fromISO(dateTime).toFormat('dd/LLL/yy');
  };

  useEffect(() => {
    if (order?.paymentStatus === 'awaitingPayment') {
      setCurrentValue(3);
    } else if (
      order?.paymentStatus === 'paymentReceived' &&
      order?.status === 'pending'
    ) {
      setCurrentValue(4);
    } else if (order?.startDate && order?.status !== 'completed') {
      setCurrentValue(5);
    } else if (order?.status === 'completed') {
      setCurrentValue(6);
    }
  }, [order]);

  const setColorPrimary = (value) => {
    return `${value < currentValue ? 'step step-primary flex' : 'step'}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <ul className="steps steps-vertical">
        <li className={setColorPrimary(2)}>
          <div className="flex flex-col items-start justify-start">
            <h5>Order created</h5>
            {order?.createdAt && <p>{formatTime(order?.createdAt)}</p>}
          </div>
        </li>
        <li className={setColorPrimary(3)}>
          <div className="flex flex-col items-start justify-start">
            <h5>Order paid</h5>
            {order?.ProofPayments?.length > 0 && (
              <p>{formatTime(order?.ProofPayments[0].createdAt)}</p>
            )}
          </div>
        </li>
        <li className={setColorPrimary(4)}>
          <div className="flex flex-col items-start justify-start">
            <h5> Order on process</h5>
            {order?.startDate && <p>{formatTime(order?.startDate)}</p>}
          </div>
        </li>
        {order?.OrderReviews &&
          order?.OrderReviews.map((el, idx) => {
            return (
              <li className={setColorPrimary(4)} value="3" key={idx}>
                <div>
                  <h5>
                    revision: {el?.countRevision}/{order?.totalRevision}
                  </h5>
                  {/* <p className="col-start-2">{formatTime(el.createdAt)}</p> */}
                </div>
              </li>
            );
          })}
        <li className={setColorPrimary(5)}>
          {order?.status === 'complete' ? (
            <div className="flex flex-col items-start justify-start">
              <h5>Order completed</h5>
              <p>{formatTime(order?.updatedAt)}</p>
            </div>
          ) : (
            <div className="flex flex-col items-start justify-start">
              <h5>Deadline</h5>
              {order?.startDate && <p>{formatTime(order?.endDate)}</p>}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

//   1. create Order order.createAt (payment = awaitingPayment)
//   2. Paid ProofPayment[0].createAt (payment = Received &&  status === pending)
//   3. on process (order.startDate) (if startdate => on progress)
//   4. Deadline (order.Enddate) (ใส่ไว้ก่อน เป็น enddate) completed (status = complete )
