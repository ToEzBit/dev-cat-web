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
            <h6 className=" font-semibold">Order created</h6>
            {order?.createdAt && (
              <p className=" text-xs opacity-80">
                {formatTime(order?.createdAt)}
              </p>
            )}
          </div>
        </li>
        <li className={setColorPrimary(3)}>
          <div className="flex flex-col items-start justify-start">
            <h6 className=" font-semibold">Order paid</h6>
            {order?.ProofPayments?.length > 0 && (
              <p className=" text-xs opacity-80">
                {formatTime(order?.ProofPayments[0].createdAt)}
              </p>
            )}
          </div>
        </li>
        <li className={setColorPrimary(4)}>
          <div className="flex flex-col items-start justify-start">
            <h6 className=" font-semibold"> Order on process</h6>
            {order?.startDate && (
              <p className=" text-xs opacity-80">
                {formatTime(order?.startDate)}
              </p>
            )}
          </div>
        </li>
        {order?.OrderReviews &&
          order?.OrderReviews.map((el, idx) => {
            return (
              <li className={setColorPrimary(4)} value="3" key={idx}>
                <div>
                  <h6 className=" font-semibold">
                    revision: {el?.countRevision}/{order?.totalRevision}
                  </h6>
                  {/* <p className="col-start-2">{formatTime(el.createdAt)}</p> */}
                </div>
              </li>
            );
          })}
        <li className={setColorPrimary(5)}>
          {order?.status === 'complete' ? (
            <div className="flex flex-col items-start justify-start">
              <h6 className=" font-semibold">Order completed</h6>
              <p className=" text-xs opacity-80">
                {formatTime(order?.updatedAt)}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-start justify-start">
              <h6 className=" font-semibold">Deadline</h6>
              {order?.startDate && (
                <p className=" text-xs opacity-80">
                  {formatTime(order?.endDate)}
                </p>
              )}
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
