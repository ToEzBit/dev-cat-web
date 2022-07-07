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
    setRoom(res?.data[0]?.id);
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
      navigate('/chatroom/' + room);
      // console.log(room);
    }
  };
  return (
    <div className="overflow-x-scroll rounded-xl border-gray-100 border">
      <table className="table text-center">
        <colgroup>
          {product?.map((element, idx) => (
            <col key={idx} className={element.title}></col>
          ))}
        </colgroup>
        <thead className=" bg-white ">
          <tr>
            <td
              className="border-b border-gray-100"
              style={{ backgroundColor: 'white' }}
            >
              <h6 className="">Package</h6>
            </td>
            {product?.map((element, idx) => (
              <th
                scope="col"
                key={idx}
                className=" bg-white border-l border-gray-100 border-b"
              >
                <h6 className="text-chat">{element.title}</h6>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className=" bg-white ">
              revision
            </th>
            {product?.map((element, idx) => (
              <td key={idx} className="border-l border-gray-100">
                {element.revision}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">duration</th>
            {product?.map((element, idx) => (
              <td key={idx} className="border-l border-gray-100">
                {element.duration} days
              </td>
            ))}
          </tr>

          <tr>
            <th scope="row">Additional details</th>
            {product?.map((element, idx) => (
              <td className="border border-gray-100" key={idx}>
                <p className="whitespace-normal  break-words">{element.info}</p>
              </td>
            ))}
          </tr>

          <tr>
            <th scope="row" className="border-r border-gray-100">
              price
            </th>
            {product?.map((element, idx) => (
              <td className="border-r border-gray-100" key={idx}>
                <div className="mt-2 flex flex-col items-center gap-4">
                  <div>{element.price} THB </div>
                  <button
                    className="btn hover:bg-chat-quotation duration-300 btn-info btn-xs px-8 pt-3  pb-6 flex justify-center items-center  bg-chat border-none  text-white"
                    onClick={handleCreateChat}
                  >
                    interested
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
