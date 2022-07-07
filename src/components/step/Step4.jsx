import { React, useState } from 'react';
import FileInput from '../../components/ui/FileInput';
import Package from '../package/Package';
import AddPackage from '../../components/modal/AddPackage';
import {
  addProductImage,
  addProductPackage,
  createProduct,
} from '../../api/product';
import { useNavigate } from 'react-router-dom';

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
      <div className="card w-3/4 flex flex-col bg-base-100 shadow-xl mx-auto mt-20">
        {/*====================== Title Project ====================== */}
        <div className="flex flex-row gap-2 ml-12 mt-6">
          <div className="gap-5">
            <label
              className="block text-purple-500 text-4xl font-extrabold mb-2"
              htmlFor="titleProject"
            >
              STEP 4
            </label>
          </div>
          <div class="card w-96 bg-base-100">
            <div class="card-body">
              <h2 class="card-title">Package</h2>

              <input
                type="text"
                placeholder="Title Project"
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <textarea
                class="textarea textarea-bordered"
                placeholder="Description"
              ></textarea>
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <input
                type="text"
                placeholder="Duration"
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <input
                type="text"
                placeholder="Revision"
                className="input input-bordered w-full max-w-xs mb-3"
              />
              <div class="card-actions justify-end">
                <button class="btn btn-primary">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-rowS justify-between">
          <div className="flex gap-2">
            <div className="card-actions">
              <button className="btn btn-primary" onClick={handleBack3}>
                BACK
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="card-actions">
              <button className="btn btn-primary" onClick={handleContinue5}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step4;
