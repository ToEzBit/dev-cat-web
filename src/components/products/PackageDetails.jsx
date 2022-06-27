import { useVisualElementContext } from 'framer-motion';
import React from 'react';

function PackageDetails({ el }) {
  console.log(el);
  return (
    <table>
      //ส่งเป็น Packageทั้งก้อน
      <colgroup>
        {el.map((element, idx) => (
          <col key={idx} className={element.title}></col>
        ))}
      </colgroup>
      <tr>
        <td></td>
        {el.map((element, idx) => (
          <th scope="col" key={idx}>
            <h6>{element.title}</h6>
            {element.info}
          </th>
        ))}
      </tr>
      <tr>
        <th scope="row">revision</th>
        {el.map((element, idx) => (
          <td key={idx}>{element.revision}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">duration</th>
        {el.map((element, idx) => (
          <td key={idx}>{element.duration} days</td>
        ))}
      </tr>
      <tr>
        {/* {el.PackageDetails ? (
          <>
            {el.PackageDetails.forEach(el)}
            <th scope="row">{el.title}</th>
          </>
        ) : (
          ''
        )} */}
        {/* {el.forEach((element) => {
          return (
           &&
            element.PackageDetails.map((specialPackage) => (
              <td>{specialPackage.value}</td>
            ))
          );
        })} */}
      </tr>
      <tr>
        <th scope="row">price</th>
        {el.map((element, idx) => (
          <td key={idx}>{element.price} THB</td>
        ))}
      </tr>
    </table>
  );
}

export default PackageDetails;
