import { useState } from 'react';
import IconDelete from '../icons/IconDelete';
import IconEdit from '../icons/IconEdit';
import ProfilePic from '../../asset/image/ProfilePic.png';
import Rating from './Rating';
import AnonymousProfilePic from '../../asset/image/AnonymousProfilePic.png';
import { deleteProductReview } from '../../api/product';
import { useAuth } from '../../contexts/AuthContext';

export default function ReviewCardReadOnly({
  userId,
  rate,
  message,
  name,
  id,
  isAnonymous,
  setIsReadOnlyMode,
  isReadOnlyMode,
  anonymousName,
  setProductByIDRender,
}) {
  const [error, setError] = useState('');
  const handleDeleteReview = async (id) => {
    if (!id) {
      setError('Product not found.');
    }
    try {
      const res = await deleteProductReview(id);
      setProductByIDRender((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="w-2/12 ">
            {isAnonymous ? (
              <img src={AnonymousProfilePic} alt="" className="w-[200px]" />
            ) : (
              <img src={ProfilePic} alt="" />
            )}
          </div>
          <h3 className="card-title">
            {isAnonymous ? anonymousName(name) : name}
          </h3>
        </div>
        <div className="flex gap-3">
          {user && user.id === userId ? (
            <div className="flex gap-2">
              <button>
                <IconEdit
                  setIsReadOnlyMode={setIsReadOnlyMode}
                  isReadOnlyMode={isReadOnlyMode}
                />
              </button>
              <button>
                <IconDelete handleDeleteReview={handleDeleteReview} id={id} />
              </button>
            </div>
          ) : (
            <></>
          )}

          <Rating rate={rate} />
        </div>
      </div>
      <p className="w-full h-11/12 flex break-all">{message}</p>
    </div>
  );
}
