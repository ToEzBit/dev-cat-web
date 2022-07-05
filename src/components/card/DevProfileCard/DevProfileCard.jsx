import ProfilePic from '../../../asset/image/ProfilePic.png';
import { useAuth } from '../../../contexts/AuthContext';

function DevProfileCard({
  id,
  email,
  username,
  firstName,
  lastName,
  profileImage,
}) {
  const { dev } = useAuth();

  return (
    <div className="w-10/12 flex justify-evenly gap-10 ">
      <div class="avatar">
        <div className="w-24 rounded-full">
          <img src={profileImage || ProfilePic} />
        </div>
      </div>
      <div className="w-4/5 flex flex-col gap-4 ">
        <div className="flex justify-between items-center">
          <h4>
            {firstName} {lastName}
          </h4>
          {dev && dev.id === id ? (
            <button className="btn btn-xs btn-outline btn-info w-fit">
              Create new product
            </button>
          ) : (
            <></>
          )}
        </div>
        <p className="break-all">
          {/* =======description======= */}
          Hi! I'm {firstName} {lastName}. For work, please contact me via{' '}
          {email}.
        </p>
      </div>
    </div>
  );
}

export default DevProfileCard;
