import { useState } from 'react';

import DevProfileCard from '../components/card/DevProfileCard/DevProfileCard';
import Navbar from '../components/navbars/Navbar';
import DevSkills from '../components/card/DevProfileCard/DevSkills';
import Workcard from '../components/workcard/Workcard';
import Footer from '../components/footer/Footer';
// import Reviews from './Reviews';

function DevProfilePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-8/12 flex flex-col gap-20">
        <div
          tabIndex="0"
          className="collapse bg-base-100 border border-base-200 rounded-box row-start-1 mt-20"
        >
          <div className="collapse-title text-xl font-medium">
            <div className="flex justify-center items-center">
              <DevProfileCard />
            </div>
          </div>
          <div className="collapse-content w-10/12x">
            {/* map el.category เป็นพรอพ */}
            <DevSkills />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-6 my-2 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#989898"
            strokeWidth={1}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div className="w-full">
          <div className=" flex justify-between">
            <h6>ALL WORK</h6>
            <div>
              <a href="/" className="text-text-btn">
                SEE MORE
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <Workcard />
            <Workcard />
            <Workcard />
          </div>
        </div>

        <div className="w-full pb-10">
          <div className=" flex justify-between">
            <h6>PORTFOLIO</h6>
            <div>
              <a href="/" className="text-text-btn">
                SEE MORE
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(8).keys()].map((el) => (
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=500&h=400"
                  alt="cats"
                  key={el}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
      {/* <Reviews /> */}
      <Footer />
    </div>
  );
}

export default DevProfilePage;
