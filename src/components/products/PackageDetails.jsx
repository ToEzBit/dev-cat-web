import React from 'react';
import { useNavigate } from 'react-router-dom';

function PackageDetails({ product }) {
  let navigate = useNavigate();
  return (
    <div className="overflow-x-scroll">
      <table className="table  text-center">
        <colgroup>
          {product?.map((element, idx) => (
            <col key={idx} className={element.title}></col>
          ))}
        </colgroup>
        <thead className="">
          <tr>
            <td></td>
            {product?.map((element, idx) => (
              <th scope="col" key={idx}>
                <h6>{element.title}</h6>
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

          <tr>
            <th scope="row">Additional details</th>
            {product?.map((element, idx) => (
              <td key={idx}>
                <p className="whitespace-normal  break-words">{element.info}</p>
              </td>
            ))}
          </tr>

          <tr>
            <th scope="row">price</th>
            {product?.map((element, idx) => (
              <td key={idx}>
                <div className="flex flex-col items-center gap-2">
                  <div>{element.price} THB </div>
                  <button
                    className="btn btn-info btn-xs w-1/2"
                    onClick={() => navigate('/chatroom')}
                  >
                    สนใจจ้าง
                  </button>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PackageDetails;
