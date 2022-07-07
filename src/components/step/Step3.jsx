import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import FileInput from '../ui/FileInput';
import ImageDisplay from '../ui/ImageDisplay';

function Step3() {
  const navigate = useNavigate();

  const [imageArr, setImageArr] = useState([]);
  const [thumbnailImage, setThumbnailImage] = useState([]);

  const deleteImgArr = (idx, arrImg, setArrImg) => {
    let newArr = [...arrImg];
    newArr.splice(idx, 1);
    setArrImg(newArr);
  };

  const handleContinue4 = () => {
    navigate('/create-product/4');
  };

  const handleBack2 = () => {
    navigate('/create-product/2');
  };

  return (
    <>
      <div className="card w-3/4 h-96 flex flex-col bg-base-100 shadow-xl mx-auto mt-20">
        {/*====================== Title Project ====================== */}
        <div className="flex flex-col gap-2 ml-12 mt-6">
          <div className="gap-5">
            <label
              className="block text-purple-500 text-4xl font-extrabold mb-2"
              htmlFor="titleProject"
            >
              STEP 3
            </label>
          </div>
        </div>
        <div></div>
        <div className="w-1/2">
          <div className="flex flex-col  px-4 py-2 m-2 gap-1 my-2   ">
            <div className="flex  w-full ">
              <label
                className="block text-[#706D9E] text-sm font-bold mb-2"
                htmlFor="standardImage"
              >
                product image
              </label>
            </div>
            <div className="grid grid-cols-4 gap-4  ">
              {imageArr.map((img, idx) => (
                <ImageDisplay
                  img={img}
                  key={idx}
                  imageArr={imageArr}
                  setImageArr={setImageArr}
                  deleteImgArr={deleteImgArr}
                />
              ))}
              {imageArr.length >= 8 ? null : (
                <FileInput setImageArr={setImageArr} />
              )}
            </div>
            <div className="flex flex-col  ">
              <div className="flex  w-full ">
                <label
                  className="block text-[#706D9E] text-sm font-bold mb-2"
                  htmlFor="thumbnailImage"
                >
                  thumbnail image
                </label>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {thumbnailImage.map((img, idx) => (
                  <ImageDisplay
                    img={img}
                    key={idx}
                    imageArr={thumbnailImage}
                    setImageArr={setThumbnailImage}
                    deleteImgArr={deleteImgArr}
                  />
                ))}
                {thumbnailImage.length > 0 ? null : (
                  <FileInput setImageArr={setThumbnailImage} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-rowS justify-between">
          <div className="flex gap-2">
            <div className="card-actions">
              <button className="btn btn-primary" onClick={handleBack2}>
                BACK
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="card-actions">
              <button className="btn btn-primary" onClick={handleContinue4}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step3;
