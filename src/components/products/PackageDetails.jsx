import React from 'react';

function PackageDetails({ product }) {
  return (
    <table className="table w-full text-center">
      <colgroup>
        {product?.map((element, idx) => (
          <col key={idx} className={element.title}></col>
        ))}
      </colgroup>
      <thead>
        <tr>
          <td></td>
          {product?.map((element, idx) => (
            <th scope="col" key={idx}>
              <h6>{element.title}</h6>
              {element.info}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">revision</th>
          {product?.map((element, idx) => (
            <td key={idx}>{element.revision}</td>
          ))}
        </tr>
        <tr>
          <th scope="row">duration</th>
          {product?.map((element, idx) => (
            <td key={idx}>{element.duration} days</td>
          ))}
        </tr>

        {/* product?.Packages?.map((el, idx) =>
    Object.entries(el).map((element, index) => {
      if (element[0] == 'PackageDetails') {
        element[1].map((ele, indx) => {
          let title = ele.title;
          let value = ele.value;
          if (!specialPackage[title]) {
            specialPackage[title] = [value];
          } else if (specialPackage[title]) {
            specialPackage[title].push(value);
          }
        });
      }
    }),
  ); */}
        <tr>
          <th scope="row">Additional details</th>

          {product?.map((element, index) => (
            <td key={index}>
              <ul className="flex flex-col justify-end">
                {element.PackageDetails.map((el, idx) => (
                  <li key={idx}>
                    {el.title}: {el.value}
                  </li>
                ))}
              </ul>
            </td>
          ))}
        </tr>

        <tr>
          <th scope="row">price</th>
          {product?.map((element, idx) => (
            <td key={idx}>
              <div className="flex flex-col items-center gap-2">
                <div>{element.price} THB </div>
                <button className="btn btn-info btn-xs w-1/2">สนใจจ้าง</button>
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default PackageDetails;
