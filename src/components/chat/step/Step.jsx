import React from 'react';

export default function Step() {
  let step = [];

  // createOrder = 1
  // paid = 2
  // start working = 3
  // submit = 4

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
