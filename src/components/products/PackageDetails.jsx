import React from 'react';

function PackageDetails({ el }) {
  return (
    <table className="table w-full text-center">
      <thead>
        <colgroup>
          {el.map((element, idx) => (
            <col key={idx} className={element.title}></col>
          ))}
        </colgroup>
        <tr>
          <td></td>
          {el.map((element, idx) => (
            <th key={idx} scope="col">
              <h6>{element.title}</h6>
              {element.info}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
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
        <tr></tr>
        <tr>
          <th scope="row">price</th>
          {el.map((element, idx) => (
            <td key={idx} className="text-blue-700">
              <div>{element.price} THB</div>
              <button className="btn btn-info btn-xs">More Info</button>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default PackageDetails;
