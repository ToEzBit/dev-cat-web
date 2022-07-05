import React from 'react';
import { useState } from 'react';
import { orderNeedsRevision } from '../../../api/order';

export default function OrderReview() {
  const [reviewDetail, setReviewDetail] = useState('');

  const orderId = 1;
  const handleSubmitReview = async () => {
    await orderNeedsRevision({ reviewDetail: reviewDetail }, orderId);
  };

  return (
    <div>
      <h3>Revision 1 / 1</h3>
      <textarea
        id="orderReview"
        name="orderReview"
        className="w-full  border border-indigo-50"
        typeof="text"
        value={reviewDetail}
        onChange={(e) => setReviewDetail(e.target.value)}
        placeholder="..."
      ></textarea>
      <button className="btn btn-info" onClick={() => handleSubmitReview()}>
        Submit
      </button>
    </div>
  );
}
