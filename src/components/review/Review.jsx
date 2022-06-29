import { useFilter } from '../context/FilterContext';
import CreateReview from './CreateReview';
import Rating from './Rating';
import ReviewCard from './ReviewCard';
import DevProfileCard from '../card/DevProfileCard/DevProfileCard';

function Review({ mode, reviews, setReviews, setProductByIDRender }) {
  const { reviewRating, setReviewRating } = useFilter();

  return (
    <div className="bg-text-color-footer w-screen flex flex-col items-center">
      {mode === 'DevPage' ? (
        <div className="w-full flex justify-center bg-text-color-footer my-4">
          <div className="w-3/5 ">
            <DevProfileCard />
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="w-8/12 flex flex-col gap-8 py-6 ">
        <div className="w-full flex justify-between">
          <h5>Review</h5>
          <div className="flex gap-4 items-center">
            <Rating setReviewRating={setReviewRating} />
            <h6>{reviewRating}</h6>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <CreateReview setProductByIDRender={setProductByIDRender} />
          {reviews?.map((el) => {
            return (
              <ReviewCard
                key={el.id}
                id={el.id}
                userId={el.userId}
                name={el.User.username}
                message={el.message}
                rate={el.rate}
                profilePic={el.User.profileImage}
                setProductByIDRender={setProductByIDRender}
                reviews={reviews}
                setReviews={setReviews}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review;
