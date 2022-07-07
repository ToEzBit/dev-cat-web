import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DevProfileCard from '../components/card/DevProfileCard/DevProfileCard';
import Navbar from '../components/navbars/Navbar';
import DevSkills from '../components/card/DevProfileCard/DevSkills';
import Workcard from '../components/card/WorkCard';
import Footer from '../components/footer/Footer';
import Review from '../components/review/Review';
import { getDevProfile } from '../api/dev';
import { getAllDevProducts } from '../api/product';
import { motion } from 'framer-motion';
function DevProfilePage() {
  const { id } = useParams();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [devProfile, setDevProfile] = useState({});
  const [devProducts, setDevProducts] = useState([]);

  useEffect(() => {
    const fetchMe = async () => {
      const res = await getDevProfile(id);
      setDevProfile(res);
    };
    const fetchMyProduct = async () => {
      const res = await getAllDevProducts(id);
      setDevProducts(res.slice(0, 2));
    };
    fetchMe();
    fetchMyProduct();
  }, []);

  console.log(devProducts);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen flex flex-col items-center"
    >
      <div className="w-full">
        <Navbar />
      </div>
      <div className=" max-w-screen-lg flex flex-col gap-20">
        <div
          tabIndex="0"
          className="collapse bg-base-100 border border-base-200 rounded-box row-start-1 mt-16"
        >
          <div className="collapse-title text-xl font-medium">
            <div className="flex justify-center items-center">
              <DevProfileCard
                profileImage={devProfile.profileImage}
                firstName={devProfile.firstName}
                lastName={devProfile.lastName}
                email={devProfile.email}
                username={devProfile.username}
                id={devProfile.id}
              />
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

        <div className="w-full flex flex-col gap-4">
          <div className=" flex justify-between">
            <h6 className="font-bold">ALL WORK</h6>
            <div>
              <a href="/" className="text-text-btn font-semibold">
                SEE MORE
              </a>
            </div>
          </div>
          <div className="flex  gap-4">
            {devProducts.map((el, idx) => (
              <Workcard key={idx} workcard={el} />
            ))}
          </div>
        </div>

        <div className="w-full pb-10 flex flex-col gap-4">
          <div className=" flex justify-between">
            <h6 className="font-bold">PORTFOLIO</h6>
            <div>
              <a href="/" className="text-text-btn font-semibold">
                SEE MORE
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 ">
            {[...Array(8).keys()].map((el, idx) => (
              <figure key={idx}>
                <img
                  className="rounded-lg"
                  src="https://api.lorem.space/image/shoes?w=500&h=400"
                  alt="cats"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
      <Review />
      <Footer />
    </motion.div>
  );
}

export default DevProfilePage;
