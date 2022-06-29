import { useFilter } from '../context/FilterContext';
import Rating from './Rating';
import ReviewCard from './ReviewCard';
import DevProfileCard from '../card/DevProfileCard/DevProfileCard';

function Review({ mode }) {
  const { reviewRating, setReviewRating } = useFilter();

  const testData = [
    {
      userId: 1,
      id: 1,
      name: 'John Doe',
      message: 'test',
      rate: '4',
    },
    {
      userId: 3,
      id: 2,
      name: 'John Doe2',
      message: 'test2',
      rate: '1',
    },
  ];
  console.log(reviewRating);
  // console.log(testData[0].rate);
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
          {testData.map((el) => {
            return (
              <ReviewCard
                key={el.id}
                userId={el.userId}
                name={el.name}
                message={el.message}
                rate={el.rate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Review;
