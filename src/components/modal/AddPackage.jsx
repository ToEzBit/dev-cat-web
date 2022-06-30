import React, { useEffect, useState } from 'react';

function AddPackage({
  packageObj: {
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
  },
}) {
  const [errTitle, setErrTitle] = useState();
  const [errInfo, setErrInfo] = useState();
  const [errPrice, setErrPrice] = useState();
  const [errDuration, setErrDuration] = useState();
  const [errRevision, setErrRevision] = useState();

  const handleValidate = () => {
    setErrTitle();
    setErrInfo();
    setErrPrice();
    setErrDuration();
    setErrRevision();

    if (packageTitle === '') {
      setErrTitle('Title is required');
    }
    if (packageInfo === '') {
      setErrInfo('Info is required');
    }
    if (packagePrice === '') {
      setErrPrice('Price is required');
    }
    if (packageDuration === '') {
      setErrDuration('Duration is required');
    }
    if (packageRevision === '') {
      setErrRevision('Revision is required');
    }
    if (
      !packageTitle ||
      !packageInfo ||
      !packagePrice ||
      !packageDuration ||
      !packageRevision
    ) {
      throw new Error('Validation error');
    }
  };

  const handleSubmit = () => {
    try {
      handleValidate();
      setPackageArr([
        ...packageArr,
        {
          title: packageTitle,
          info: packageInfo,
          price: packagePrice,
          duration: packageDuration,
          revision: packageRevision,
        },
      ]);
      setPackageTitle('');
      setPackageInfo('');
      setPackagePrice('');
      setPackageDuration('');
      setPackageRevision('');
    } catch (err) {
      // console.log(err);
    }
  };

  // useEffect(() => {
  //   const handleSubmit = () => {
  //     setErrTitle();
  //     setErrInfo();
  //     setErrPrice();
  //     setErrDuration();
  //     setErrRevision();

  //     if (packageTitle === '') {
  //       setErrTitle('Title is required');
  //       return;
  //     }
  //     if (packageInfo === '') {
  //       setErrInfo('Info is required');
  //       return;
  //     }
  //     if (packagePrice === '') {
  //       setErrPrice('Price is required');
  //       return;
  //     }
  //     if (packageDuration === '') {
  //       setErrDuration('Duration is required');
  //       return;
  //     }
  //     if (packageRevision === '') {
  //       setErrRevision('Revision is required');
  //       return;
  //     }

  //     alert('Package added successfully');
  //   };
  //   handleSubmit();
  // }, [clicked]);

  // const handleAddPackage = () => {
  //   if (errTitle || errInfo || errPrice || errDuration || errRevision) {
  //     console.log(errTitle);
  //     // setPackageArr([
  //     //   ...packageArr,
  //     //   {
  //     //     title: packageTitle,
  //     //     info: packageInfo,
  //     //     price: packagePrice,
  //     //     duration: packageDuration,
  //     //     revision: packageRevision,
  //     //   },
  //     // ]);
  //     setPackageTitle('');
  //     setPackageInfo('');
  //     setPackagePrice('');
  //     setPackageDuration('');
  //     setPackageRevision('');
  //     alert('Package added successfully');
  //   }
  // };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex justify-end ">
        <div className="modal-action">
          <label role="button" htmlFor="addPackage-modal">
            X
          </label>
        </div>
      </div>
      <div className="flex flex-col   text-[#06033A] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg border border-[#7879F1]">
        <div className="flex justify-around py-5">
          <label>John Doe</label>
          <label>Package :</label>
        </div>
        {/* ==============================================================detailUser=============================================================== */}
        <div>
          <div className="flex flex-col">
            <div className="flex justify-start">
              <label
                className="block text-[#7879F1] text-sm font-bold mb-2 "
                htmlFor="Title"
              >
                Title
              </label>
            </div>
            <input
              className={`flex   p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border sm:text-xs  ${
                errTitle ? 'border-red-500' : 'border-[#E8E7FF]'
              } `}
              id="Title"
              type="text"
              placeholder={errTitle ? errTitle : 'Input Title'}
              value={packageTitle}
              onChange={(e) => setPackageTitle(e.target.value)}
            />
            <div className="flex justify-start">
              <label
                className="block text-[#7879F1] text-sm font-bold mb-2"
                htmlFor="Description"
              >
                Info
              </label>
            </div>
            <input
              className={`flex   p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border sm:text-xs  ${
                errInfo ? 'border-red-500' : 'border-[#E8E7FF]'
              } `}
              id="Description"
              type="text"
              placeholder={errInfo ? errInfo : 'Input Info'}
              value={packageInfo}
              onChange={(e) => setPackageInfo(e.target.value)}
            />
            <div className="flex justify-start">
              <label
                className="block text-[#7879F1] text-sm font-bold mb-2"
                htmlFor="Price"
              >
                Price
              </label>
            </div>
            <input
              className={`flex   p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border sm:text-xs  ${
                errPrice ? 'border-red-500' : 'border-[#E8E7FF]'
              } `}
              id="Price"
              type="text"
              placeholder={errPrice ? errPrice : 'Input Price'}
              value={packagePrice}
              onChange={(e) => setPackagePrice(e.target.value)}
            />
            <div className="flex justify-start">
              <label
                className="block text-[#7879F1] text-sm font-bold mb-2"
                htmlFor="Duration"
              >
                Duration
              </label>
            </div>
            <input
              className={`flex   p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border sm:text-xs  ${
                errDuration ? 'border-red-500' : 'border-[#E8E7FF]'
              } `}
              id="Duration"
              type="text"
              placeholder={errDuration ? errDuration : 'Input Work Duration'}
              value={packageDuration}
              onChange={(e) => setPackageDuration(e.target.value)}
            />
            <div className="flex justify-start">
              <label
                className="block text-[#7879F1] text-sm font-bold mb-2"
                htmlFor="Revision"
              >
                Revision
              </label>
            </div>
            <input
              className={`flex   p-2 my-1 w-full text-[#706D9E] text-center rounded-lg border sm:text-xs  ${
                errRevision ? 'border-red-500' : 'border-[#E8E7FF]'
              } `}
              id="Revision"
              type="text"
              placeholder={errRevision ? errRevision : 'Input errRevision'}
              value={packageRevision}
              onChange={(e) => setPackageRevision(e.target.value)}
            />
          </div>
          <div></div>
          {/* ==================================================================input detail============================================================= */}
          <div className="flex  justify-center rounded-lg ">
            <div className="modal-action">
              <label
                className="bg-white hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold py-2 px-4 my-4 border border-[#E8E7FF] rounded-xl shadow"
                onClick={handleSubmit}
                // onClick={() => setClicked(!clicked)}
                // htmlFor="addPackage-modal"
                role="button"
              >
                Submit
              </label>
            </div>
          </div>
          {/* ==================================================================button================================================================ */}
        </div>
      </div>
    </div>
  );
}

export default AddPackage;
