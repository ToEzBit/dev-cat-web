import ProfilePic from '../../../asset/image/ProfilePic.png';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

function DevProfileCard({
  id,
  email,
  username,
  firstName,
  lastName,
  profileImage,
  product,
}) {
  return (
    <div className="bg-white rounded-lg shadow-xl py-8 px-16 flex flex-col gap-6 ">
      <div className="    flex items-center justify-center gap-8">
        <div className="flex justify-center">
          <div className="flex gap-6 items-center ">
            <Link
              to={`/dev/profile/${id}`}
              className=" drop-shadow-lg  shadow-text-placeholder  stroke"
            >
              <div className="avatar ">
                <div className="w-24 rounded-full">
                  <img src={profileImage || ProfilePic} />
                </div>
              </div>
            </Link>
            <div className="flex flex-col gap-3 ">
              <div className="flex justify-between items-center">
                <h4 className="text-text-normal ">
                  {firstName} {lastName}
                </h4>
              </div>
              <p className="break-all text-left w-3/4 text-gray-600 ">
                {/* =======description======= */}
                Hi! I'm {firstName} {lastName}. For work, please contact me via{' '}
                {email}.
              </p>
            </div>
          </div>
          <div>
            <Link
              to={`/dev/profile/${id}`}
              className="flex  items-center px-2 p-1 gap-1 rounded-lg bg-chat  hover:bg-text-orange duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <div className="text-white text-sm font-medium">
                contact seller
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-8 justify-center border-t pb-2 pt-6 rounded-lg border-text-color-footer ">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
          </svg>
          <div className=" font-semibold text-chat text-lg">Verify</div>
          <div className="font-medium">member</div>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div className=" font-semibold text-chat text-lg">Website</div>
          <div className="font-medium">developer</div>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <div className=" font-semibold text-chat text-lg">Mobile-app</div>
          <div className="font-medium">developer</div>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 stroke-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <div className=" font-semibold text-chat text-lg">Chat</div>
          <div className="font-medium">available</div>
        </div>
      </div>
    </div>
  );
}

export default DevProfileCard;
