import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RichTextEditor from '../jodit/JoditDraft';

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
      <div>
        <div className="flex flex-col">
          <label
            className="block text-[#06033A] text-sm font-bold mb-2"
            htmlFor="titleProject"
          >
            Product Name
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setNameProduct(e.target.value)}
          />
          {error ? (
            <p className="text-red-500">Product Name is required</p>
          ) : null}
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
            <RichTextEditor initialValue="" getValue={setInfo}></RichTextEditor>
            <td dangerouslySetInnerHTML={{ __html: info }}></td>
          </div>
        </div>
        <div className="flex flex-rowS justify-between">
          <div className="flex gap-2">
            <div className="card-actions">
              <button className="btn btn-primary" onClick={handleBack1}>
                BACK
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="card-actions">
              <button className="btn btn-primary" onClick={handleContinue3}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step2;
