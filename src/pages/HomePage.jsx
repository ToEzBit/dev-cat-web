import React from 'react';
import BGHome from '../asset/image/BGhome.png';
import Cathome from '../asset/image/Cathome.png';
import Footer from '../components/footer/Footer';
import NavbarHome from '../components/navbars/NavbarHome';
import Workcard from '../components/workcard/Workcard';

function HomePage() {
  return (
    <div className="relative flex flex-col gap-24">
      {/* ================================== Section 1 ===================================== */}
      <NavbarHome />
      <img src={BGHome} alt="" className="absolute -z-50 h-screen w-screen" />
      <div className="grid  h-screen">
        {/* ================================== Nav ===================================== */}
        {/* ================================== Descrip Home ===================================== */}

        <div className="max-w-screen-lg mx-auto grid ">
          <div className=" grid grid-flow-col items-center">
            <div className="col-span-1 flex flex-col justify-center gap-8">
              <div>
                <div className=" text-8xl text-white">DEVcats...</div>
                <div className=" text-7xl text-orange-500">that can read</div>
                <div className=" text-7xl text-orange-500">your mind</div>
              </div>
              <div className=" text-2xl text-orange-200 opacity-60">
                Enjoy the best web developer, advanced reccomendation algorithms
                and concerts calendar all in one package
              </div>
            </div>
            <img className=" col-span-5 w-screen " src={Cathome} alt="" />
          </div>
        </div>
        {/* ================================== Button Home ===================================== */}
        <div className=" grid grid-cols-3 gap-4 items-end max-w-screen-lg mx-auto">
          sadasdasd
        </div>
      </div>
      <div className=" max-w-screen-lg mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-3 gap-12">sa asdasdsd</div>
        <div className=" flex flex-col gap-8">
          <div>Popular works</div>
          Gallary
          <div className=" flex flex-col gap-4">
            <div>
              We have quality developer. and various experts in the system to
              serve
            </div>
            <div>
              Attract customers' attention through various channels such as
              websites or social media. with great promotions after covid with
              banners from professional designers who understand consumer
              behavior very well In addition to helping to increase the number
              of accommodation reservations It also makes your hotel memorable.
            </div>
          </div>
        </div>
      </div>
      {/* ================================== Popular Home and Mobile ===================================== */}
      <div className=" bg-violet-400 py-8">
        <div className="max-w-screen-lg mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>Popular Desktop</div>
            <div className="grid gap-4 grid-cols-4">
              <Workcard />
              <Workcard />
              <Workcard />
              <Workcard />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>Popular Mobile</div>
            <div className="grid grid-cols-4">
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
          <div>Why use Devwork?</div>
          <div className="grid grid-cols-3 gap-8 ">
            {' '}
            <div>
              <div>Quality Developer</div>
              <div>
                developer through selection And verify your identity with
                Devwork can check
              </div>
            </div>
            <div>
              <div>Quality Developer</div>
              <div>
                developer through selection And verify your identity with
                Devwork can check
              </div>
            </div>
            <div>
              <div>Quality Developer</div>
              <div>
                developer through selection And verify your identity with
                Devwork can check
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>Devwork, one of the best quality developer</div>
          <div>
            They also have the freedom to choose employment from time to time.
            Able to compare prices and quality of freelance work that are
            available in a variety of In addition, Fastwork.co's secure payment
            system ensures complete and accurate delivery of the work to the
            customer. By being an intermediary in holding money while the
            freelancer is working, and in turn guaranteeing the delivery of
            wages to the freelancer upon completion of the work and delivering
            it to the client as well, Fastwork.co currently has Freelancers who
            have passed quality screening for more than 50, 000 people serve
            over 90 job categories covering more than 15,000 diverse job
            requirements, sorted by freelancers' skills, to provide a full range
            of customer needs. Whether it's a business owner, SME business,
            online seller or even the general public who are looking for a
            professional job at an affordable price Quality guaranteed by
            Fastwork, a source of professional freelancers who have been trusted
            by more than 700,000 customers.
          </div>
        </div>
      </div>
      {/* ================================== Footer ===================================== */}
      <Footer />
    </div>
  );
}

export default HomePage;
