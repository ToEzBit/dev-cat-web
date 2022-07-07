import { React, useState } from 'react';
import FileInput from '../../components/ui/FileInput';
import Package from '../package/Package';
import AddPackage from '../../components/modal/AddPackage';
import {
  addProductImage,
  addProductPackage,
  createProduct,
} from '../../api/product';
import step1 from '../../asset/video/step1.mp4';
import { useNavigate } from 'react-router-dom';
import ConfirmCreateProduct from '../modal/ConfirmCreateProduct';
import { motion } from 'framer-motion';

function Step4() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [packageArr, setPackageArr] = useState([]);
  const [packageTitle, setPackageTitle] = useState('');
  const [packageInfo, setPackageInfo] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [packageDuration, setPackageDuration] = useState('');
  const [packageRevision, setPackageRevision] = useState('');

  const packageObj = {
    packageArr,
    setPackageArr,
    packageTitle,
    setPackageTitle,
    packageInfo,
    setPackageInfo,
    packagePrice,
    setPackagePrice,
    packageDuration,
    setPackageDuration,
    packageRevision,
    setPackageRevision,
  };

  const deletePackageArr = (idx, arrPackage, setArrPackage) => {
    let newArr = [...arrPackage];
    newArr.splice(idx, 1);
    setArrPackage(newArr);
  };

  const handleContinue5 = () => {
    navigate('/create-product/5');
  };
  const handleBack3 = () => {
    navigate('/create-product/3');
  };

  // const handleSubmit = async () => {
  //   try {
  //     setIsLoading(true);
  //     const createdProduct = await createProduct({ title, info, category });

  //     if (packageArr.length > 0) {
  //       for (const el of packageArr) {
  //         await addProductPackage(createdProduct.id, {
  //           title: el.title,
  //           info: el.info,
  //           price: el.price,
  //           duration: el.duration,
  //           revision: el.revision,
  //         });
  //       }
  //     }

  //     if (imageArr.length > 0) {
  //       const formData = new FormData();
  //       for (const el of imageArr) {
  //         formData.append('standard', el);
  //       }
  //       addProductImage(createdProduct.id, formData);
  //     }
  //     if (thumbnailImage.length > 0) {
  //       const formData = new FormData();
  //       formData.append('thumbnail', thumbnailImage[0]);
  //       await addProductImage(createdProduct.id, formData);
  //     }
  //     navigate('/');
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="card max-w-screen-xl flex flex-col bg-base-100 p-20 border shadow-xl mx-auto gap-8"
      >
        {/*====================== Title Project ====================== */}
        <div className="flex flex-col gap-4 ">
          <div className="flex justify-between">
            <label
              className="block text-chat text-5xl font-extrabold"
              htmlFor="titleProject"
            >
              STEP 4
            </label>
            <div className="flex gap-4">
              <div className="card-actions">
                <button
                  className="btn btn-primary bg-chat border-none hover:bg-chat-quotation duration-500"
                  onClick={handleBack3}
                >
                  BACK
                </button>
              </div>
              <div className="card-actions">
                <button
                  className=""
                  // onClick={}
                >
                  <ConfirmCreateProduct />
                  {/* Confirm to Create */}
                </button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2  gap-4">
            <div className="flex flex-col gap-4">
              <div className="text-text-normal text-sm opacity-50">
                Create a care package your employees will love. We hope you find
                just what you're looking for in all the options below.
              </div>
              <div class=" flex flex-col gap-4 border p-4 rounded-xl">
                <h2 class="block text-text-normal text-base  font-bold">
                  Package
                </h2>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Title Project"
                    className="input input-bordered w-full  "
                  />
                  <textarea
                    class="textarea textarea-bordered w-full "
                    placeholder="Description"
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Category"
                    className="input input-bordered w-full  "
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    className="input input-bordered w-full  "
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    className="input input-bordered w-full  "
                  />
                  <input
                    type="text"
                    placeholder="Revision"
                    className="input input-bordered w-full  "
                  />
                </div>
                <div class="">
                  <button class=" btn btn-primary w-full bg-chat border-none hover:bg-chat-quotation duration-500d">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>

            <div className=" rounded-xl w-[100%] h-full">
              <video
                autoPlay
                loop
                muted
                className=" object-cover h-full rounded-xl w-full"
                src={step1}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Step4;
