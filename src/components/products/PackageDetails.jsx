import axios from '../../config/axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

function PackageDetails({ product, devId }) {
  const [room, setRoom] = useState('');
  const ctx = useAuth();
  let navigate = useNavigate();
  console.log(devId);
  const handleCreateChat = async () => {
    const res = await axios.get(
      `/conversations/find/${devId}/${ctx?.clientChat?.id}`,
    );
    setRoom(res.data[0].id);
    console.log(res.data.length === 0);
    if (res.data.length === 0) {
      const conversation = {
        senderId: ctx?.clientChat?.id,
        receiverId: devId,
      };
      const createRoom = await axios.post('/conversations', conversation);
      console.log(createRoom);
      navigate('/chatroom/' + room);
    } else {
      navigate('/chatroom/' + '5');
      // console.log(room);
    }
  };
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
                <button
                  className="btn btn-info btn-xs w-1/2"
                  onClick={handleCreateChat}
                >
                  สนใจจ้าง
                </button>
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default PackageDetails;
