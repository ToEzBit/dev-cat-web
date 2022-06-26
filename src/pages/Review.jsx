export default function Reviews() {
  const [reviewRating, setReviewRating] = useState(5);
  const testData = [
    {
      id: 1,
      name: 'John Doe',
      message: 'test',
      rate: '4',
    },
    {
      id: 2,
      name: 'John Doe2',
      message: 'test2',
      rate: '1',
    },
  ];
  return (
    <div className="bg-text-color-footer w-screen  flex flex-col items-center">
      <div className="w-8/12 flex flex-col gap-8 py-6 ">
        <div className="w-full flex justify-between">
          <h5>Review</h5>
          <div className="flex gap-4">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                onChange={() => setReviewRating(1)}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                onChange={() => setReviewRating(2)}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                onChange={() => setReviewRating(3)}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                onChange={() => setReviewRating(4)}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                onChange={() => setReviewRating(5)}
              />
            </div>
            <h6>{reviewRating}</h6>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {testData.map((el) => {
            return (
              <ReviewCard
                key={el.id}
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
