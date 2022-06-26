import ProfilePic from '../../../asset/image/ProfilePic.png';

 function DevProfileCard() {
  return (
    <div className="w-10/12 flex justify-evenly gap-10">
      <img src={ProfilePic} alt="" className="w-1/5" />
      <div className="w-4/5 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h4>John Doe</h4>
          <button className="btn btn-xs btn-outline btn-info w-fit">
            Create new product
          </button>
        </div>
        <p className="break-all">
          Hi! I'm John Doe. For work, please contact me via my email:
          johndoe@gmail.com{' '}
        </p>
      </div>
    </div>
  );
}

export default DevProfileCard