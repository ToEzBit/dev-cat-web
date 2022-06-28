import { useState } from 'react';
import ProfilePic from '../../asset/image/ProfilePic.png';
import AnonymousProfilePic from '../../asset/image/AnonymousProfilePic.png';

import { useFilter } from '../context/FilterContext';
// import { FilterContext } from '../context/FilterContext';
import Rating from './Rating';

export default function ReviewCard({ id, name, message, rate }) {
  const { setReviewRating } = useFilter();
  const [isReadOnlyMode, setIsReadOnlyMode] = useState(true);
  const [reviewError, updateReviewError] = useState('');
  const [newMessage, setNewMessage] = useState(message);

  // const handleUpdateReview = async (newValue, id) => {
  //   if (!newValue) {
  //     setReviewError('Nothing to update yet.');
  //   }
  //   try {
  //     const res = await updateProductReview(newValue, id);
  //     const idx = devReview.findIndex((el) => el.id === id);
  //     if (idx !== -1) {
  //       const clonedDevReview = [...devReview];
  //       clonedDevReview[idx] = { ...clonedDevReview[idx], ...newValue };
  //       setDevReview(clonedDevReview);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleRemoveProductReview = async (id) => {
  //   try {
  //     const res = await deleteProductReview(id);
  //     const idx = devReview.findIndex((el) => el.id === id);
  //     if (idx !== -1) {
  //       const clonedDevReview = [...devReview];
  //       clonedDevReview.splice(idx, 1);
  //       setDevReview(clonedDevReview);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
                  <div className="flex items-center gap-2">
                    <h2 className="card-title">{name || '*** ******'}</h2>
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
                  </div>
                  <div>
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
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        onClick={() => setIsReadOnlyMode(!isReadOnlyMode)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
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
                    </div>
                  </div>
                  <div>
                    <Rating setReviewRating={setReviewRating} />
                  </div>
                </div>
                <textarea
                  type="text"
                  id="newMessage"
                  name="newMessage"
                  value={newMessage}
                  className="min-w-full max-w-full border border-indigo-50 rounded-md"
                  onChange={(e) => setNewMessage(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
