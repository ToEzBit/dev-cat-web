import React from 'react';

export default function Step() {
  //   let step = [];

  //     const "order" = {
  //       "id": 5,
  //       "totalRevision": 3,
  //       "currentRevision": 3,
  //       "packagePrice": "1000",
  //       "totalSpacialRequirementPrice": "7000",
  //       "totalPrice": "8000",
  //       "startDate": "2022-06-26T11:01:28.000Z",
  //       "totalDuration": 12,
  //       "endDate": "2022-07-07T11:01:28.000Z",
  //       "status": "completed",
  //       "paymentStatus": "paymentReceived",
  //       "createdAt": "2022-06-26T07:38:24.000Z",
  //       "updatedAt": "2022-06-26T13:12:27.000Z",
  //       "devId": 1,
  //       "userId": 1,
  //       "Product": {
  //         "id": 1,
  //         "title": "test update product2",
  //         "category": "mobile"
  //       },
  //       "Package": {
  //         "id": 4,
  //         "title": "product 1 package 2",
  //         "revision": 5,
  //         "duration": 10,
  //         "price": "5000"
  //       },
  //       "ProofPayments": [
  //         {
  //           "id": 2,
  //           "spacialRequire": true,
  //           "transactionId": "Omise TransactionId",
  //           "createdAt": "2022-06-26T12:22:15.000Z",
  //           "updatedAt": "2022-06-26T12:22:15.000Z"
  //         },
  //         {
  //           "id": 3,
  //           "spacialRequire": true,
  //           "transactionId": "Omise TransactionId",
  //           "createdAt": "2022-06-26T13:12:27.000Z",
  //           "updatedAt": "2022-06-26T13:12:27.000Z"
  //         }
  //       ],
  //       "OrderReviews": [
  //         {
  //           "id": 1,
  //           "countRevision": 1,
  //           "reviewDetail": "errrrrrrrrrrrrrrrrrrrrrr",
  //           "createdAt": "2022-06-26T13:06:24.000Z",
  //           "updatedAt": "2022-06-26T13:06:24.000Z"
  //         },
  //         {
  //           "id": 2,
  //           "countRevision": 2,
  //           "reviewDetail": "errrrrrrrrrrrrrrrrrrrrrr",
  //           "createdAt": "2022-06-26T13:06:56.000Z",
  //           "updatedAt": "2022-06-26T13:06:56.000Z"
  //         },
  //         {
  //           "id": 3,
  //           "countRevision": 3,
  //           "reviewDetail": "errrrrrrrrrrrrrrrrrrrrrr",
  //           "createdAt": "2022-06-26T13:07:41.000Z",
  //           "updatedAt": "2022-06-26T13:07:41.000Z"
  //         }
  //       ]
  //     }

  //   1. create Order order.createAt (payment = awaitingPayment)
  //   2. Paid ProofPayment[0].createAt (payment = Received &&  status === pending)
  //   3. on process (order.startDate) (if startdate => on progress)
  //   4. Deadline (order.Enddate) (ใส่ไว้ก่อน เป็น enddate) completed (status = complete )

  // for (let i = 0; i <)

  //  let pagination = [];

  //  for (let i = 0; i < Math.ceil(pageNumber); i++) {
  //    pagination.push(
  //      <button
  //        className={`btn btn-ghost ${
  //          currentPage === i + 1 ? 'text-indigo-500' : ''
  //        }`}
  //        onClick={() => setCurrentPage(i + 1)}
  //      >
  //        {i + 1}
  //      </button>,
  //    );
  //  }

  //  const nextPage = currentPage + 1;
  //  const prevPage = currentPage - 1;
  //  return (
  //    <div className="btn-group btn-ghost my-8 mx-auto">
  //      <button
  //        className={`btn btn-ghost ${currentPage === 1 && 'btn-disabled'}`}
  //        onClick={() => setCurrentPage(1)}
  //      >
  //        {'<<'}
  //      </button>
  //      <button
  //        className={`btn btn-ghost ${currentPage === 1 && 'btn-disabled'}`}
  //        onClick={() => setCurrentPage(prevPage)}
  //      >
  //        {'<'}
  //      </button>
  //      {pagination}
  //      <button
  //        className={`btn btn-ghost ${
  //          currentPage === pageNumber && 'btn-disabled'
  //        }`}
  //        onClick={() => setCurrentPage(nextPage)}
  //      >
  //        {'>'}
  //      </button>
  //      <button
  //        className={`btn btn-ghost ${
  //          currentPage === pageNumber && 'btn-disabled'
  //        }`}
  //        onClick={() => setCurrentPage(pageNumber)}
  //      >
  //        {'>>'}
  //      </button>
  //    </div>
  //  );

  return (
    <div className="flex flex-col gap-4">
      <ul className="steps steps-vertical">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
      <div>
        <div className="text-base font-bold text-chat">ORDER CREATED</div>
        <div className=" text-sm ">8 July 2022 start diccuss </div>
      </div>
      <div>
        <div className="text-base text-chat-quotation  font-bold">PAID</div>
        <div className=" text-sm text-chat-quotation ">10 July 2022 </div>
      </div>
      <div>
        <div className="text-base text-chat-quotation  font-bold">
          IN PROCESS
        </div>
        {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
      </div>
      <div>
        <div className="text-base text-chat-quotation  font-bold">REVIEW</div>
        {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
      </div>
      <div>
        <div className="text-base text-chat-quotation  font-bold">COMPLETE</div>
        {/* <div className=" text-sm ">8 July 2022 start diccuss </div> */}
      </div>
    </div>
  );
}
