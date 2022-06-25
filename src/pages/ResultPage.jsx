import { useState } from 'react';

import Navbar from '../components/navbars/Navbar';
import Workcard from '../components/workcard/Workcard';
import FilterResultPage from '../components/filter/FilterResultPageDropDown';
import Footer from '../components/footer/Footer';
import CarouselSecondary from '../components/carousel/CarouselSecondary';
import Carousel from '../components/carousel/Carousel';

export default function ResultPage() {
  const [LowerBoundPrice, setLowerBoundPrice] = useState(100);
  const [upperBoundPrice, setUpperBoundPrice] = useState(1000);
  const [rating, setRating] = useState(5);
  const [duration, setDuration] = useState('');
  const [order, setOrder] = useState('');

  return (
    <div className="flex flex-col gap-30 w-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="flex w-3/6 justify-between my-8">
          <a href="/" className="font-medium">
            Mobile Application
          </a>
          <a href="/" className="text-text-btn font-medium">
            All Types
          </a>
          <a href="/" className="font-medium">
            Desktop Website
          </a>
        </div>
        {/* ==================== carousel ==================== */}
        <div className="w-4/5 flex flex-col gap-6">
          <CarouselSecondary />
          {/* </div> */}

          {/* ==================== filter bar ==================== */}
          <div className="flex justify-between w-full">
            <h5 className="text-text-btn">All Types</h5>
            <div className="flex justify-between w-3/5">
              <FilterResultPage
                title="Price"
                LowerBoundPrice={LowerBoundPrice}
                upperBoundPrice={upperBoundPrice}
                setLowerBoundPrice={setLowerBoundPrice}
                setUpperBoundPrice={setUpperBoundPrice}
              />
              <FilterResultPage title="Rating" setRating={setRating} />
              <FilterResultPage title="Duration" setRating={setDuration} />
              <FilterResultPage title="Order by" setOrder={setOrder} />
            </div>
          </div>

          {/* ============ end of filter bar =============== */}
          <div className="flex justify-between w-full">
            <p>
              <span>124</span> services available
            </p>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex justify-between gap-2">
              <Workcard />
              <Workcard />
              <Workcard />
              <Workcard />
            </div>
            <div className="w-full flex justify-between gap-2">
              <Workcard />
              <Workcard />
              <Workcard />
              <Workcard />
            </div>
            <div className="w-full flex justify-between gap-2">
              <Workcard />
              <Workcard />
              <Workcard />
              <Workcard />
            </div>
            <div className="w-full flex justify-between gap-2">
              <Workcard />
              <Workcard />
              <Workcard />
              <Workcard />
            </div>
          </div>
          <div class="btn-group btn-ghost my-8 mx-auto">
            <button class="btn btn-ghost">{'<<'}</button>

            <button class="btn btn-ghost">{'<'}</button>

            <button class="btn btn-ghost">1</button>
            <button class="btn btn-ghost text-text-btn">2</button>
            <button class="btn btn-ghost">3</button>
            <button class="btn btn-ghost">4</button>
            <button class="btn btn-ghost">{'>'}</button>
            <button class="btn btn-ghost">{'>>'}</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
