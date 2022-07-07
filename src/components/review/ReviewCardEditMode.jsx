import { useState } from 'react';
import IconDelete from '../icons/IconDelete';
import ProfilePic from '../../asset/image/ProfilePic.png';
import Rating from './Rating';
import AnonymousProfilePic from '../../asset/image/AnonymousProfilePic.png';
import IconXMark from '../icons/IconXMark';
import { updateProductReview } from '../../api/product';
import IconCheck from '../icons/IconCheck';
import IconEyesOpen from '../icons/IconEyesOpen';
import IconEyesClose from '../icons/IconEyesClose';

export default function ReviewCardEditMode({
  rate,
  message,
  name,
  id,
  isAnonymous,
  setIsReadOnlyMode,
  profilePic,
  isReadOnlyMode,
  anonymousName,
  setProductByIDRender,
  userId,
}) {
  const [error, setError] = useState('');
  const [newRate, setNewRate] = useState(rate);
  const [newMessage, setNewMessage] = useState(message);
  const [newIsAnonymous, setNewIsAnonymous] = useState(isAnonymous);
  const handleUpdateReview = async () => {
    setIsReadOnlyMode(!isReadOnlyMode);
    if (
      newRate === rate &&
      newMessage === message &&
      newIsAnonymous === isAnonymous
    ) {
      console.log(newRate === rate);
      console.log(newMessage === message);
      console.log(newIsAnonymous === isAnonymous);
      setError('Nothing to update yet.');
    }
    if (!id) {
      setError('Product not found.');
    }

    try {
      if (error.length != 0) {
        const res = await updateProductReview(
          {
            message: newMessage,
            rate: newRate,
            isAnonymous: newIsAnonymous,
          },
          id,
        );
        console.log(res);
        if (setProductByIDRender) {
          setProductByIDRender((prev) => !prev);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-2/12 ">
            {newIsAnonymous ? (
              <img src={AnonymousProfilePic} alt="" className="w-[240px]" />
            ) : (
              <img
                src={profilePic || ProfilePic}
                alt=""
                className="w-[240px]"
              />
            )}
          </div>
          <div className="flex items-stretch">
            <h3 className="card-title">
              {newIsAnonymous ? anonymousName(name) : name}
            </h3>
            <button>
              {newIsAnonymous ? (
                <IconEyesOpen setNewIsAnonymous={setNewIsAnonymous} />
              ) : (
                <IconEyesClose setNewIsAnonymous={setNewIsAnonymous} />
              )}
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-2">
            <button>
              <IconCheck handleUpdateReview={handleUpdateReview} />
            </button>
            <button>
              <IconXMark
                setIsReadOnlyMode={setIsReadOnlyMode}
                isReadOnlyMode={isReadOnlyMode}
              />
            </button>
          </div>
          <Rating setNewRate={rate} />
        </div>
      </div>
      <textarea
        typeof="text"
        value={newMessage}
        name="newMessage"
        className="min-w-full max-w-full border border-indigo-50 rounded-md"
        onChange={(e) => setNewMessage(e.target.value)}
      ></textarea>
      {error.length !== 0 && <span>{error}</span>}
    </div>
  );
}
