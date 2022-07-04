import React from 'react';

function ProductDetails({ message }) {
  return (
    <div className="prose text-left  max-w-none">
      <td dangerouslySetInnerHTML={{ __html: message }}></td>
    </div>
  );
}

export default ProductDetails;
