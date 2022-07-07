import React from 'react';

function ProductDetails({ message }) {
  return (
    <div className="prose text-left text-chat  max-w-none ">
      <td
        className="text-chat"
        dangerouslySetInnerHTML={{ __html: message }}
      ></td>
    </div>
  );
}

export default ProductDetails;
