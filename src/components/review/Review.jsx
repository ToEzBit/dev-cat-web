import { useFilter } from '../context/FilterContext';
import CreateReview from './CreateReview';
import Rating from './Rating';
import ReviewCard from './ReviewCard';

export default function Reviews({ reviews }) {
  const { reviewRating, setReviewRating } = useFilter();

  return (
    <div className="bg-text-color-footer w-screen flex flex-col items-center">
      <div className="w-8/12 flex flex-col gap-8 py-6 ">
        <div className="w-full flex justify-between">
          <h5>Review</h5>
          <div className="flex gap-4 items-center">
            <Rating setReviewRating={setReviewRating} />
            <h6>{reviewRating}</h6>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <CreateReview />
          {reviews?.map((el) => {
            console.log(reviews);
            return (
              <ReviewCard
                key={el.id}
                userId={el.userId}
                name={el.User.username}
                message={el.message}
                rate={el.rate}
                profilePic={el.User.profileImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
