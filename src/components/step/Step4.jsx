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
import { useCreateProduct } from '../../contexts/CreateProductContext';
import Modal from '../ui/headlessUi/Modal';
import Spinner from '../../components/common/Spinner';

function Step4() {
  const navigate = useNavigate();
  const { packageArr, setPackageArr, handleCreateProduct, isLoading } =
    useCreateProduct();
  // const [packageArr, setPackageArr] = useState([]);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [revision, setRevision] = useState('');

  const packageObj = {
    title,
    info,
    price,
    duration,
    revision,
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

  const handlePushArr = () => {
    if (!title || !info || !price || !duration || !revision) {
      alert('Please fill in all fields');
      return;
    }
    setPackageArr([...packageArr, packageObj]);
    setTitle('');
    setInfo('');
    setPrice('');
    setDuration('');
    setRevision('');
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
      {isLoading ? <Spinner /> : null}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="card max-w-screen-xl flex flex-col bg-base-100 p-20 border shadow-xl mx-auto gap-8 mt-4"
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
                  <ConfirmCreateProduct
                    handleCreateProduct={handleCreateProduct}
                  />
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
                    placeholder="Title Package"
                    className="input input-bordered w-full"
                    value={title}
                    disabled={packageArr.length >= 3 ? true : false}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    class="textarea textarea-bordered w-full "
                    placeholder="Description"
                    value={info}
                    disabled={packageArr.length >= 3 ? true : false}
                    onChange={(e) => setInfo(e.target.value)}
                  ></textarea>
                  <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered w-full  "
                    value={price}
                    disabled={packageArr.length >= 3 ? true : false}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Duration"
                    className="input input-bordered w-full  "
                    value={duration}
                    disabled={packageArr.length >= 3 ? true : false}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Revision"
                    className="input input-bordered w-full  "
                    value={revision}
                    disabled={packageArr.length >= 3 ? true : false}
                    onChange={(e) => setRevision(e.target.value)}
                  />
                </div>
                <div class="">
                  <button
                    class="btn btn-primary w-full bg-chat border-none hover:bg-chat-quotation duration-500"
                    onClick={handlePushArr}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className="w-full">
                <Modal
                  packageArr={packageArr}
                  setPackageArr={setPackageArr}
                  deletePackageArr={deletePackageArr}
                />
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
      {/* {packageArr?.map((el, idx) => (
        // <Package
        //   key={idx}
        //   title={el.title}
        //   info={el.info}
        //   price={el.price}
        //   duration={el.duration}
        //   revision={el.revision}
        //   packageArr={packageArr}
        //   setPackageArr={setPackageArr}
        //   deletePackageArr={deletePackageArr}
        // />
     
      ))} */}
    </>
  );
}

export default Step4;
