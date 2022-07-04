import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPackage from './AddPackage';
import FileInput from '../ui/FileInput';
import ImageDisplay from '../ui/ImageDisplay';
import Package from '../package/Package';
import Spinner from '../common/Spinner';
import {
  addProductImage,
  addProductPackage,
  createProduct,
} from '../../api/product';
import RichTextEditor from '../jodit/JoditDraft';

function CreateProducts() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState('Select Category');

  const [imageArr, setImageArr] = useState([]);
  const [thumbnailImage, setThumbnailImage] = useState([]);

  const [packageArr, setPackageArr] = useState([]);
  const [packageTitle, setPackageTitle] = useState('');
  const [packageInfo, setPackageInfo] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [packageDuration, setPackageDuration] = useState('');
  const [packageRevision, setPackageRevision] = useState('');

  const [isLoading, setIsLoading] = useState(false);

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

  const deleteImgArr = (idx, arrImg, setArrImg) => {
    let newArr = [...arrImg];
    newArr.splice(idx, 1);
    setArrImg(newArr);
  };

  const deletePackageArr = (idx, arrPackage, setArrPackage) => {
    let newArr = [...arrPackage];
    newArr.splice(idx, 1);
    setArrPackage(newArr);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const createdProduct = await createProduct({ title, info, category });

      if (packageArr.length > 0) {
        for (const el of packageArr) {
          await addProductPackage(createdProduct.id, {
            title: el.title,
            info: el.info,
            price: el.price,
            duration: el.duration,
            revision: el.revision,
          });
        }
      }

      if (imageArr.length > 0) {
        const formData = new FormData();
        for (const el of imageArr) {
          formData.append('standard', el);
        }
        addProductImage(createdProduct.id, formData);
      }
      if (thumbnailImage.length > 0) {
        const formData = new FormData();
        formData.append('thumbnail', thumbnailImage[0]);
        await addProductImage(createdProduct.id, formData);
      }
      navigate('/');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <Spinner /> : null}
      <div className="flex flex-col ">
        <div className="flex justify-end px-5 py-3">
          <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 mx-3 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
            Close
          </button>
          <button
            className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="flex flex-col   text-[#06033A] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-[#7879F1]">
          <div className="flex  w-full  ">
            <div className="flex flex-col  flex-auto  text-center  px-4 py-2 m-2 gap-3 my-2  w-1/2">
              <div className="">
                <div className="flex justify-start">
                  <label
                    className="block text-[#06033A] text-sm font-bold mb-2"
                    htmlFor="titleProject"
                  >
                    Title Project
                  </label>
                </div>

                <input
                  className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#9747FF] sm:text-xs "
                  id="TitleProject"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Input Title Project"
                />

                <div className="dropdown dropdown-active flex justify-start my-4">
                  <label
                    tabIndex="0"
                    className="bg-transparent active:bg-[#E8E7FF] text-[#5D5FEF] font-semibold active:text-[#06033A] py-2 px-4  border border-[#9747FF] active:border-transparent rounded-xl shadow-md"
                  >
                    {category}
                  </label>
                  <ul
                    tabIndex="0"
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li onClick={() => setCategory('web')}>
                      <p>Web Application</p>
                    </li>
                    <li onClick={() => setCategory('mobile')}>
                      <p>Mobile Application</p>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col pt-5">
                  <div className="flex justify-start">
                    <label
                      className="block text-[#06033A] font-bold mb-2 text-sm"
                      htmlFor="Information"
                    >
                      Information
                    </label>
                  </div>
                  <div className="prose text-left  max-w-none">
                    <RichTextEditor
                      initialValue=""
                      getValue={setInfo}
                    ></RichTextEditor>
                    <td dangerouslySetInnerHTML={{ __html: info }}></td>
                  </div>
                  {/* <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-md text-[#706D9E]    rounded-xl border border-[#9747FF] py-8 "
                    placeholder="Input Information"
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                  /> */}
                </div>
              </div>
            </div>

            {/* ====================================================================TitleProject =============================================================================*/}
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
          </div>
          {/* ====================================================================add image =============================================================================*/}
          <div className="flex flex-col ">
            <div className="flex flex-row  justify-end  ">
              <div>
                {packageArr.length >= 3 ? null : (
                  <>
                    <button>
                      <label
                        htmlFor="addPackage-modal"
                        className=" bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 mx-3 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md  modal-button text-center "
                        role="button"
                      >
                        ADD Package
                      </label>
                    </button>
                    <input
                      type="checkbox"
                      id="addPackage-modal"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <AddPackage packageObj={packageObj} />
                      </div>
                    </div>
                  </>
                )}

                {/* <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 mx-3 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
                ADD
              </button>
              <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
                DELETE
              </button> */}
              </div>
            </div>
            {packageArr?.map((el, idx) => (
              <Package
                key={idx}
                title={el.title}
                info={el.info}
                price={el.price}
                duration={el.duration}
                revision={el.revision}
                packageArr={packageArr}
                setPackageArr={setPackageArr}
                deletePackageArr={deletePackageArr}
              />
            ))}
          </div>
          {/* ====================================================================add TitleProject =============================================================================*/}

          <div className="flex flex-col  flex-auto text-[#5D5FEF] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg ">
            {/* <button className="bg-white hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold py-2 px-4 border border-[#E8E7FF] rounded shadow">
            +
          </button> */}
          </div>
        </div>
        {/* ====================================================================button TitleProject =============================================================================*/}
      </div>
    </>
  );
}

export default CreateProducts;
