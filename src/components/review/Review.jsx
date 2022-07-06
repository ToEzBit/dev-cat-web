import { useFilter } from '../../contexts/FilterContext';
import CreateReview from './CreateReview';
import Rating from './Rating';
import ReviewCard from './ReviewCard';
import DevProfileCard from '../card/DevProfileCard/DevProfileCard';
import { getAccessToken } from '../../services/localStorage';
import { useOrder } from '../../contexts/OrderContext';
import { useAuth } from '../../contexts/AuthContext';

function Review({
  mode,
  reviews,
  setReviews,
  setProductByIDRender,
  productDev,
  productId,
  product,
}) {
  // console.log(productId);
  const { dev } = useAuth();
  const { myOrder } = useOrder();
  const { reviewRating, setReviewRating } = useFilter();
  return (
    <div className="bg-text-color-footer w-screen flex flex-col items-center">
      {mode === 'ProductPage' ? (
        <div className="w-full max-w-screen-lg  bg-text-color-footer py-10">
          <div className=" flex flex-col gap-8">
            <div className="flex justify-between">
              <h5 className="">Developer</h5>
              {dev && dev.id === productDev?.id ? (
                <button className="btn btn-xs btn-outline btn-info w-fit">
                  Create new product
                </button>
              ) : (
                <></>
              )}
            </div>
            <DevProfileCard
              product={product}
              id={productDev?.id}
              email={productDev?.email}
              username={productDev?.username}
              firstName={productDev?.firstName}
              lastName={productDev?.lastName}
              profileImage={productDev?.profileImage}
            />
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="w-full max-w-screen-lg  flex flex-col gap-8 py-6 ">
        <div className="w-full flex justify-between">
          <h5>Review</h5>
          <div className="flex gap-4 items-center">
            <Rating setReviewRating={setReviewRating} />
            <h6 className=" rounded-full bg-amber-300 px-4 text-white">
              {reviewRating}.0
            </h6>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {myOrder?.length > 0 &&
            myOrder
              ?.map((el, idx) => {
                return (
                  +el.Product.id === +productId && (
                    <CreateReview setProductByIDRender={setProductByIDRender} />
                  )
                );
              })
              .slice(0, 1)}
          {reviews?.map((el) => {
            return (
              <ReviewCard
                key={el.id}
                id={el.id}
                userId={el.userId}
                name={el.User.username}
                message={el.message}
                rate={el.rate}
                isAnonymous={el.isAnonymous}
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
