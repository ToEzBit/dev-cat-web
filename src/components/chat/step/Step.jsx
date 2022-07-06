import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { getDevOderById, getUserOderById } from '../../../api/order';

export default function Step({ order }) {
  // const [order, setOrder] = useState({});
  // console.log(orderId);

  // useEffect(() => {
  //   const getOrder = async () => {
  //     try {
  //       if (friendId?.sender % 2 === 0) {
  //         console.log('test');
  //         const res = await getUserOderById(orderId);
  //         setOrder(res?.data?.order);
  //         console.log(order);
  //         // order = res?.data?.order;
  //       } else {
  //         const resDev = await getDevOderById(orderId);
  //         setOrder(resDev?.data?.order);
  //         console.log(resDev?.data?.order);
  //         console.log(order);

  //         // order = resDev?.data?.order;
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getOrder();
  // }, [orderId]);

  // console.log(order);

  const formatTime = (dateTime) => {
    return DateTime.fromISO(dateTime).toFormat('dd/LLL/yy');
  };

  const [currentValue, setCurrentValue] = useState(0);

  console.log(order?.paymentStatus);
  useEffect(() => {
    if (order?.paymentStatus === 'awaitingPayment') {
      setCurrentValue(3);
    } else if (
      order?.paymentStatus === 'Received' &&
      order?.status === 'pending'
    ) {
      console.log('test2');
      setCurrentValue(4);
    } else if (order?.startDate && order?.status !== 'completed') {
      console.log('test3');
      setCurrentValue(5);
    } else if (order?.status === 'completed') {
      console.log('test4');
      setCurrentValue(6);
    }
  }, [order]);

  const setColorPrimary = (value) => {
    console.log(currentValue);
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
