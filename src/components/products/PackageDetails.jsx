import { useVisualElementContext } from 'framer-motion';
import React from 'react';

function PackageDetails({ product }) {
  //   console.log(product);
  return (
    <table>
      <colgroup>
        {product?.map((element, idx) => (
          <col key={idx} className={element.title}></col>
        ))}
      </colgroup>
      <tr>
        <td></td>
        {product?.map((element, idx) => (
          <th scope="col" key={idx}>
            <h6>{element.title}</h6>
            {element.info}
          </th>
        ))}
      </tr>
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
      <tr>
        <th scope="row">Number of Page</th>
        {product?.map((element, idx) => (
          <td key={idx}>{element.numberOfPages}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">responsiveDesign</th>
        {product?.map((element, idx) => (
          <td key={idx}>{element.responsiveDesign}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">source file</th>
        {product?.map((element, idx) => (
          <td key={idx}>{element.sourceFile}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">Content Upload </th>
        {product?.map((element, idx) => (
          <td key={idx}>{element.contentUpload}</td>
        ))}
      </tr>

      <tr>
        <th scope="row">price</th>
        {product?.map((element, idx) => (
          <div className="flex flex-col">
            <td key={idx}>{element.price} THB</td>
            <button className="btn btn-info btn-xs">สนใจจ้าง</button>
          </div>
        ))}
      </tr>
    </table>
  );
}

export default PackageDetails;
