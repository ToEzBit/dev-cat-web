import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Footer() {
  return (
    <div>
      <div className=" w-screen bg-gray-900 py-12">
        <div className="max-w-screen-lg mx-auto grid grid-cols-5">
          <div className=" text-white col-span-1 font-medium text-xl">
            DavCats
          </div>
          <div className=" col-span-1">
            <div className="  text-white font-medium">Devwork Navigate</div>
            <div className="flex flex-col">
              <Link to="/" className=" text-white text-sm">
                Home
              </Link>
              <Link to="/result" className=" text-white text-sm">
                All Products
              </Link>
            </div>
          </div>
          <div className=" col-span-1">
            <div className="  text-white font-medium">Devwork category</div>
            <div className="flex flex-col">
              <Link to="/result" className=" text-white text-sm">
                Mobile Application
              </Link>
              <Link to="/result" className=" text-white text-sm">
                Desktop Website
              </Link>
              <Link to="/result" className=" text-white text-sm">
                All Category
              </Link>
            </div>
          </div>
          <div className=" col-span-1">
            <div className="  text-white font-medium">Devwork Popular</div>
            <div className="flex flex-col">
              <Link to="/result" className=" text-white text-sm">
                Popular Mobile
              </Link>
              <Link to="/result" className=" text-white text-sm">
                Popular Desktop
              </Link>
              <Link to="/result" className=" text-white text-sm">
                Popular All
              </Link>
            </div>
          </div>

          <div>
            <div className=" text-white  font-medium">Contact us</div>
            <div>
              <div className=" text-white text-sm">hello@Devwork.co</div>
              <div className=" text-white text-sm">
                Monday - Friday 9.30-22.00
              </div>
              <div className=" text-white text-sm">
                Saturday-Sunday, public{' '}
              </div>
              <div className=" text-white text-sm">
                holiday 10:00 a.m. - 7:00 p.m.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
