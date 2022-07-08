import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import DevProfileCard from '../components/card/DevProfileCard/DevProfileCard';
import Navbar from '../components/navbars/Navbar';
import DevSkills from '../components/card/DevProfileCard/DevSkills';
import Workcard from '../components/card/WorkCard';
import Footer from '../components/footer/Footer';
import Review from '../components/review/Review';
import { getDevPortfolio, getDevProfile } from '../api/dev';
import { getAllDevProducts } from '../api/product';
import { motion } from 'framer-motion';
function DevProfilePage() {
  const { id } = useParams();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [devProfile, setDevProfile] = useState({});
  const [devProducts, setDevProducts] = useState([]);
  const [render, setRender] = useState(false);
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchMe = async () => {
      const res = await getDevProfile(id);
      setDevProfile(res);
      setReviews(res?.ProductReviews);
    };
    const fetchMyProduct = async () => {
      const res = await getAllDevProducts(id);
 
      setDevProducts(res?.slice(0, 6));
    };
    const fetchPortfolio = async () => {
      const res = await getDevPortfolio(id);
      setPortfolio(res);
    };
    fetchMe();
    fetchMyProduct();
    fetchPortfolio();
  }, [render]);
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
        <div className=" text-xl font-medium">
          <div className="flex justify-center items-center">
            <DevProfileCard
              profileImage={devProfile?.profileImage}
              firstName={devProfile?.firstName}
              lastName={devProfile?.lastName}
              email={devProfile?.email}
              username={devProfile?.username}
              id={devProfile?.id}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className=" flex justify-between">
            <h6 className="font-bold">ALL WORK</h6>
            <div>
              <Link to="/result/all" className="text-text-btn font-semibold">
                SEE MORE
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3  gap-4">
            {devProducts.map((el, idx) => (
              <Workcard key={idx} workcard={el} />
            ))}
          </div>
        </div>

        <div className="w-full pb-10 flex flex-col gap-4">
          <div className=" flex justify-between">
            <h6 className="font-bold">PORTFOLIO</h6>
            <div>
              <Link to="/result/all" className="text-text-btn font-semibold">
                SEE MORE
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 ">
            {portfolio?.slice(0, 8).map((el, idx) => {
              return (
                <figure key={idx} className="h-52 w-full">
                  <img
                    className="block object-cover w-full h-full  rounded-lg shadow-lg"
                    src={el.image}
                  />
                </figure>
              );
            })}
          </div>
        </div>
      </div>
      {/* product={product}
      productId={productId}
      mode="ProductPage" productDev={product?.Dev}
      reviews={reviews}
      setReviews={setReviews}
      setProductByIDRender={setRender} */}

      <Review reviews={reviews} setRender={setRender} setReviews={setReviews} />
      <Footer />
    </motion.div>
  );
}

export default DevProfilePage;
