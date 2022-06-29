import { useState } from 'react';
import ProfilePic from '../../asset/image/ProfilePic.png';
import { useFilter } from '../context/FilterContext';
import Rating from './Rating';
import { updateProductReview, deleteProductReview } from '../../api/product';

export default function ReviewCard({
  id,
  name,
  message,
  rate,
  reviews,
  setReviews,
  setProductByIDRender,
}) {
  const [isReadOnlyMode, setIsReadOnlyMode] = useState(true);
  const [newRate, setNewRate] = useState(rate);
  const [newMessage, setNewMessage] = useState(message);
  const [error, setError] = useState('');

  const handleUpdateReview = async () => {
    setIsReadOnlyMode(!isReadOnlyMode);
    if (newRate === rate || newMessage === newMessage) {
      setError('Nothing to update yet.');
    }
    if (!id) {
      setError('Product not found.');
    }

    try {
      const res = await updateProductReview(
        {
          message: newMessage,
          rate: newRate,
          // setNewIsAnonymous: setNewIsAnonymous,
        },
        id,
      );
      setProductByIDRender((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteReview = async () => {
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

  return (
    <div className="card card-compact h-30 w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-start gap-2">
          <div className="w-1/12">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="h-30 w-full">
            {isReadOnlyMode ? (
              <div>
                <div className="h-2/5 flex justify-between">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="card-title">{name || '*** ******'}</h2>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        onClick={() => {
                          handleDeleteReview();
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onClick={() => setIsReadOnlyMode(!isReadOnlyMode)}
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <Rating rate={rate} />
                  </div>
                </div>
                <p className="w-full h-full break-all">{message}</p>
              </div>
            ) : (
              <div>
                <div className="h-2/5 flex justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="card-title">{name || '*** ******'}</h2>
                  </div>
                  <div className="flex gap-2 items-center gap-2">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onClick={() => handleUpdateReview()}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        onClick={() => setIsReadOnlyMode(!isReadOnlyMode)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <Rating setNewRate={setNewRate} />
                  </div>
                </div>
                <textarea
                  typeof="text"
                  value={newMessage}
                  id="newMessage"
                  name="newMessage"
                  className="min-w-full max-w-full border border-indigo-50 rounded-md"
                  onChange={(e) => setNewMessage(e.target.value)}
                ></textarea>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
