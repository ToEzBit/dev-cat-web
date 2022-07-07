import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import FileInput from '../ui/FileInput';
import ImageDisplay from '../ui/ImageDisplay';
import step1 from '../../asset/video/step1.mp4';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="card max-w-screen-xl h-full flex flex-col gap-4 bg-base-100 shadow-xl mx-auto border p-20 mt-20"
      >
        {/*====================== Title Project ====================== */}
        <div className="flex flex-col gap-2">
          <div className="gap-5">
            <label
              className="block text-chat text-5xl font-extrabold"
              htmlFor="titleProject"
            >
              STEP 3
            </label>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-1/2 ">
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-2">
                <div className="block text-text-normal text-base font-bold">
                  Upload Your Image
                </div>
                <div className="text-text-normal text-sm opacity-50">
                  Customers want to see your handiwork. choose an image to
                  showcase your work.
                </div>
              </div>
              <div className="flex flex-col  w-full gap-2">
                <label
                  className="block text-text-normal text-base font-bold"
                  htmlFor="standardImage"
                >
                  Product Image
                </label>

                <div className="grid grid-cols-4 gap-4  overflow-scroll ">
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
              </div>
              <div className="flex flex-col gap-2  ">
                <label
                  className="block text-text-normal  text-base font-bold "
                  htmlFor="thumbnailImage"
                >
                  Thumbnail Image
                </label>

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
          <div className=" rounded-xl w-[100%] h-80">
            <video
              autoPlay
              loop
              muted
              className=" object-cover h-80 rounded-xl w-full"
              src={step1}
            />
          </div>
        </div>
        <div className="flex flex-rowS justify-between">
          <div className="flex gap-2">
            <div className="card-actions">
              <button
                className="btn btn-primary bg-chat border-none hover:bg-chat-quotation duration-500"
                onClick={handleBack2}
              >
                BACK
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="card-actions">
              <button
                className="btn btn-primary bg-chat border-none hover:bg-chat-quotation duration-500"
                onClick={handleContinue4}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Step3;
