import React from 'react';

export default function OrderDetails({
  selectedPackage,
  selectedProduct,
}) {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-1/2 h-1/2 gap-5 flex flex-col">
        <h3>Order details</h3>

        <div>
          Select Product: {selectedProduct?.title}
          Select Package: {selectedPackage?.title}
          {selectedPackage && (
            <div>
              <h5>Description</h5>
              <ul>
                <li>category: {selectedProduct.category} </li>
                {Object.entries(selectedPackage).map((el, idx) => {
                  if (el[0] === 'PackageDetails') {
                    return;
                  }
                  return (
                    <li key={idx}>
                      {el[0]} :{el[1]}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
