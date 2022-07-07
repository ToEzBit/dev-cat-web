import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RichTextEditor from '../jodit/JoditDraft';
import { motion } from 'framer-motion';

function Step2() {
  const navigate = useNavigate();

  const [info, setInfo] = useState('');
  const [error, setError] = useState(false);
  const [nameProduct, setNameProduct] = useState('');

  const handleContinue3 = async (e) => {
    try {
      e.preventDefault();

      if (!nameProduct) {
        setError(true);
      }
      navigate('/create-product/3');
      //   window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleBack1 = () => {
    navigate('/create-product/1');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="card  max-w-screen-xl h-full  px-20 py-16 border flex flex-col bg-base-100 shadow-xl mx-auto mt-8"
      >
        <div className="flex gap-4 flex-col">
          <label
            className="block text-chat text-5xl font-extrabold"
            htmlFor="titleProject"
          >
            STEP 2
          </label>
          <div className="flex gap-8 items-center">
            <div className="w-5/6 flex flex-col gap-2">
              <label
                className="block text-text-normal  text-base font-bold mb-2"
                htmlFor="titleProject"
              >
                Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setNameProduct(e.target.value)}
              />
              {error ? (
                <p className="text-red-500">Product Name is required</p>
              ) : null}
            </div>
            <div className=" text-text-normal text-sm opacity-50 text-center">
              "A good brand name should be one that lasts. brand naming Should
              choose to use words that" have a broad meaning. not too specific
              so that in the future Would you like to diversify your product
              range or expand your business? So you don't have to waste time
              changing the brand name.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col pt-5">
            <div className="flex flex-col gap-2">
              <label
                className="block text-text-normal  text-base font-bold mb-2 "
                htmlFor="Information"
              >
                Information
              </label>

              <div className="prose text-left  max-w-none">
                <RichTextEditor
                  className=""
                  initialValue=""
                  getValue={setInfo}
                ></RichTextEditor>
                <td dangerouslySetInnerHTML={{ __html: info }}></td>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <button
              className="btn btn-primary bg-chat border-none hover:bg-chat-quotation duration-500"
              onClick={handleBack1}
            >
              BACK
            </button>

            <button
              className="btn btn-primary bg-chat border-none hover:bg-chat-quotation duration-500"
              onClick={handleContinue3}
            >
              Continue
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Step2;
