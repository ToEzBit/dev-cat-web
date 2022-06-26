import ProfilePic from '../../asset/image/ProfilePic.png';

export default function reviewCard({ name, message, rate }) {
  const rating = (
    <div className="flex">
      {[...Array(5).keys()].map((el, idx) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill={idx <= +rate - 1 ? '#FB923C' : '#F2BDA2'}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div>
            <div className="flex justify-start gap-8">
              <img src={ProfilePic} alt="" className="w-3/12" />
              <div>
                <h2 className="card-title">{name || '*** ******'}</h2>
                <p>{message || 'test'}</p>
              </div>
            </div>
          </div>
          <div className="">{rating}</div>
        </div>
      </div>
    </div>
  );
}
