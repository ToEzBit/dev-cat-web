import { useVisualElementContext } from 'framer-motion';
import React from 'react';

function PackageDetails({ el }) {
  console.log(el);
  return (
    <table>
      //ส่งเป็น Packageทั้งก้อน
      <colgroup>
        {el.map((element) => (
          <col className={element.title}></col>
        ))}
      </colgroup>
      <tr>
        <td></td>
        {el.map((element) => (
          <th scope="col">
            <h6>{element.title}</h6>
            {element.info}
          </th>
        ))}
      </tr>
      <tr>
        <th scope="row">revision</th>
        {el.map((element) => (
          <td>{element.revision}</td>
        ))}
      </tr>
      <tr>
        <th scope="row">duration</th>
        {el.map((element) => (
          <td>{element.duration} days</td>
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
        {el.map((element) => (
          <td>{element.price} THB</td>
        ))}
      </tr>
    </table>
  );
}

export default PackageDetails;
