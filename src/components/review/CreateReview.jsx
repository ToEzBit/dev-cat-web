import { useState } from 'react';
import ProfilePic from '../../asset/image/ProfilePic.png';
import AnonymousProfilePic from '../../asset/image/AnonymousProfilePic.png';
import Rating from './Rating';
import { useProduct } from '../../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function CreateReview({ name, setProductByIDRender }) {
  const { user } = useAuth();
  const { productId } = useParams();
  const { handleCreateProductReview } = useProduct();
  const [rate, setRate] = useState(4);
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [createReviewError, setCreateReviewError] = useState('');

  const handleCreateReview = async () => {
    if (!rate) {
      setCreateReviewError('Rating is required. ');
    }
    if (!message) {
      setCreateReviewError(
        setCreateReviewError('Review Message is required. '),
      );
    }
    await handleCreateProductReview({ rate, message, isAnonymous }, productId);
    setRate(4);
    setProductByIDRender((prev) => !prev);
    setMessage('');
  };

  return (
    <div className="w-full shadow-sm rounded-lg bg-white px-8 py-4">
      <div className="w-full h-30 m-2 flex">
        <div className="flex justify-between">
          <div className=" flex justify-start gap-3 items-center ">
            <div className="w-10">
              <img
                src={
                  isAnonymous
                    ? AnonymousProfilePic
                    : user?.profileImage || ProfilePic
                }
                alt=""
              />
            </div>
            <div>
              {isAnonymous ? (
                <div
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className="flex gap-2 items-center"
                >
                  ******
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className="flex gap-2 items-center"
                >
                  {user?.firstName
                    ? `${user?.firstName + user?.lastName}`
                    : user?.username}
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center mx-4">
          <Rating setRate={setRate} />
        </div>
      </div>
      <textarea
        id="productReview"
        name="productReview"
        className="w-full  border border-indigo-50 rounded-lg px-4 py-2 duration-300 placeholder:text-chat-quotation"
        typeof="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Review this product..."
      ></textarea>
      <div className="w-full flex justify-end items-center">
        {createReviewError && <span>{createReviewError}</span>}

        <button
          className="btn hover:bg-chat-quotation duration-300 btn-info btn-xs px-8 pt-3  pb-6 flex justify-center items-center  bg-chat border-none  text-white"
          onClick={() => handleCreateReview()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
