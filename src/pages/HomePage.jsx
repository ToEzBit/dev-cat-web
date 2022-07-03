import React from 'react';
import BGHome from '../asset/image/BGhome.jpeg';
import Cathome from '../asset/image/Cathome.png';
import Cards from '../components/card/Cards';
import Carousel from '../components/carousel/Carousel';
import Footer from '../components/footer/Footer';
import NavbarHome from '../components/navbars/NavbarHome';
import Workcard from '../components/card/WorkCard';
import phone from '../asset/image/Phone.png';
import laptop from '../asset/image/Laptop.png';
import AlltypeHome from '../asset/image/AlltypeHome.png';
import Alltype2 from '../asset/image/Alltype2.png';
import Alltype3 from '../asset/image/Alltype3.png';
import Alltype4 from '../asset/image/Alltype4.png';
import Alltype5 from '../asset/image/Alltype5.png';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
// import { useProduct } from '../contexts/ProductContext';

function HomePage() {
  const ctx = useAuth();
  // const pro = useProduct();
  return (
    <>
      {console.log(ctx?.user)}

      <motion.div
        className="relative flex flex-col  gap-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* ================================== Section 1 ===================================== */}
        <div className=" relative h-screen">
          <NavbarHome className="absolute" />
          <img
            src={BGHome}
            alt=""
            className="absolute -z-50 h-screen w-screen top-0"
          />
          {/* ================================== Nav ===================================== */}
          {/* ================================== Descrip Home ===================================== */}
          <div className="absolute top-0 bottom-0 left-0 right-0 max-w-screen-xl mx-auto grid ">
            <div className=" grid grid-cols-2 items-center ">
              <div className="col-span-1 flex flex-col gap-8">
                <div>
                  <div className=" text-8xl  text-white">DEVcats...</div>
                  <div className=" text-7xl  text-orange-500">
                    that can read
                  </div>
                  <div className=" text-7xl text-orange-500">your mind</div>
                </div>
                <div className=" text-2xl text-orange-200 opacity-60">
                  Enjoy the best web developer, advanced reccomendation
                  algorithms and concerts calendar all in one package
                </div>
              </div>
              <div className="col-span-1">
                <img className=" " src={Cathome} alt="" />
              </div>

              {/* <button className="btn glass h-24 z-1 hover:scale-110 duration-300 ">
              Mobile Application
            </button>
            <button className="btn glass h-24  hover:scale-110 duration-300 z-10">
              Website development
            </button>
            <button className="btn glass h-24 z-1  hover:scale-110 duration-300 ">
              All Types
            </button> */}
            </div>

            {/* ================================== Button Home ===================================== */}

            <div className="absolute bottom-12 left-0 right-0 flex justify-center max-w-screen-lg mx-auto">
              <a
                href="#section1"
                alt=""
                className="animate-bounce text-white col-start-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </a>

              {/* <button className="btn glass h-24 z-1 hover:scale-110 duration-300 ">
              Mobile Application
            </button>
            <button className="btn glass h-24  hover:scale-110 duration-300 z-10">
              Website development
            </button>
            <button className="btn glass h-24 z-1  hover:scale-110 duration-300 ">
              All Types
            </button> */}
            </div>
          </div>
        </div>
        <div className=" max-w-screen-xl items-center mx-auto   px-32 flex flex-col gap-16 mt-16">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-8 ">
              {' '}
              <div className="flex gap-4 items-center">
                <h1 className=" text-[6rem] text-text-btn">1</h1>
                <div>
                  {/* <h2>Quality Developer</h2> */}
                  <div>
                    developer through selection And verify your identity with
                    Devwork can check
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <h1 className=" text-[6rem] text-text-btn">2</h1>
                <div>
                  {/* <h2>Quality Developer</h2> */}
                  <div>
                    developer through selection And verify your identity with
                    Devwork can check
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <h1 className=" text-[6rem] text-text-btn">3</h1>
                <div>
                  {/* <h2>Quality Developer</h2> */}
                  <div>
                    developer through selection And verify your identity with
                    Devwork can check
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="section1"></div>
          <div className="flex flex-col gap-4 text-center">
            <h1>Devwork, one of the best quality developer</h1>
            <div>
              They also have the freedom to choose employment from time to time.
              Able to compare prices and quality of freelance work that are
              available in a variety of In addition, Fastwork.co's secure
              payment system ensures complete and accurate delivery of the work
              to the customer. By being an intermediary in holding money while
              the freelancer is working, and in turn guaranteeing the delivery
              of wages to the freelancer upon completion of the work and
              delivering it to the client as well, Fastwork.co currently has
              Freelancers who have passed quality screening for more than 50,
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <div className=" flex flex-col gap-8">
              <div className=" flex justify-between w-full text-center">
                <Cards pic={phone} bgpic={phone} type={'Mobile Application'} />
                <Cards pic={laptop} bgpic={laptop} type={'Website Developer'} />
              </div>
              <div className="hover: card bg-base-100 shadow-xl image-full">
                <figure className="gap-8">
                  <img
                    src={Alltype2}
                    className="bg-contain h-36 w-48"
                    alt="Shoes"
                  />
                  <img
                    src={Alltype3}
                    className="bg-contain h-36 w-48"
                    alt="Shoes"
                  />
                  <img
                    src={AlltypeHome}
                    className="bg-contain h-48 w-48"
                    alt="Shoes"
                  />
                  <img
                    src={Alltype4}
                    className="bg-contain h-48 w-48"
                    alt="Shoes"
                  />
                  <img
                    src={Alltype5}
                    className="bg-contain h-48 w-48"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body items-center gap-4">
                  <h2 className="card-title text-center mt-8">All Type</h2>
                  <p>Mobile Application and Website Developer</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-4 text-center">
              <h3 className="text-text-orange">
                We have quality developer. and various experts in the system to
                serve
              </h3>
              <p className="text-text-normal">
                Attract customers' attention through various channels such as
                websites or social media. with great promotions after covid with
                banners from professional designers who understand consumer
                behavior very well In addition to helping to increase the number
                of accommodation reservations It also makes your hotel
                memorable.
              </p>
            </div>

            <div className=" flex flex-col gap-8">
              <h5 className="text-text-normal">Popular works</h5>

              <div className="h-[24rem]">
                <Carousel className="" />
              </div>
              {/* <div className=" flex flex-col gap-4">
              <h4 className="text-text-orange">
                We have quality developer. and various experts in the system to
                serve
              </h4>
              <p className="text-text-normal">
                Attract customers' attention through various channels such as
                websites or social media. with great promotions after covid with
                banners from professional designers who understand consumer
                behavior very well In addition to helping to increase the number
                of accommodation reservations It also makes your hotel
                memorable.
              </p>
            </div> */}
            </div>
          </div>
        </div>

        {/* ================================== Popular Home and Mobile ===================================== */}
        <div className=" bg-bg-home-content py-8">
          <div className="max-w-screen-lg mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h5 className="">Popular Desktop</h5>
              <div className="grid gap-4 grid-cols-4">
                <Workcard />
                <Workcard />
                <Workcard />
                <Workcard />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h5>Popular Mobile</h5>
              <div className="grid gap-4 grid-cols-4">
                <Workcard />
                <Workcard />
                <Workcard />
                <Workcard />
              </div>
            </div>
          </div>
        </div>
        {/* ================================== Why use Devwork? ===================================== */}
        <div className="max-w-screen-lg mx-auto flex flex-col gap-24">
          <div className="flex flex-col gap-4">
            <h5>Why use Devwork?</h5>
            <div className="grid grid-cols-3 gap-8 ">
              {' '}
              <div>
                <h5>Quality Developer</h5>
                <div>
                  developer through selection And verify your identity with
                  Devwork can check
                </div>
              </div>
              <div>
                <h5>Quality Developer</h5>
                <div>
                  developer through selection And verify your identity with
                  Devwork can check
                </div>
              </div>
              <div>
                <h5>Quality Developer</h5>
                <div>
                  developer through selection And verify your identity with
                  Devwork can check
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5>Devwork, one of the best quality developer</h5>
            <div>
              They also have the freedom to choose employment from time to time.
              Able to compare prices and quality of freelance work that are
              available in a variety of In addition, Fastwork.co's secure
              payment system ensures complete and accurate delivery of the work
              to the customer. By being an intermediary in holding money while
              the freelancer is working, and in turn guaranteeing the delivery
              of wages to the freelancer upon completion of the work and
              delivering it to the client as well, Fastwork.co currently has
              Freelancers who have passed quality screening for more than 50,
              000 people serve over 90 job categories covering more than 15,000
              diverse job requirements, sorted by freelancers' skills, to
              provide a full range of customer needs. Whether it's a business
              owner, SME business, online seller or even the general public who
              are looking for a professional job at an affordable price Quality
              guaranteed by Fastwork, a source of professional freelancers who
              have been trusted by more than 700,000 customers.
            </div>
          </div>
        </div>
        {/* ================================== Footer ===================================== */}
        <Footer />
      </motion.div>
    </>
  );
}

export default HomePage;
