import { useState } from 'react';

import Navbar from '../components/navbars/Navbar';
import Workcard from '../components/card/WorkCard';
import FilterResultPageDropDown from '../components/filter/FilterResultPageDropDown';
import Footer from '../components/footer/Footer';
import CarouselSecondary from '../components/carousel/CarouselSecondary';
import Pagination from '../components/pagination/Pagination';
import { useEffect } from 'react';
import { getAllProducts } from '../api/product';

function ResultPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState([]);
  const [LowerBoundPrice, setLowerBoundPrice] = useState(1);
  const [upperBoundPrice, setUpperBoundPrice] = useState(100000);
  const [rating, setRating] = useState(null);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    const run = async () => {
      const res = await getAllProducts();
      const fetchProducts = res.data.products;
      setProducts(fetchProducts);
    };
    try {
      run();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const productArr = products.reduce((acc, curr) => {
    const {
      id,
      title,
      Packages,
      ProductReviews,
      category,
      Dev,
      ProductImages,
    } = curr;
    // console.log({ id, title, Packages, ProductReviews });
    const priceArr = Packages.map((el) => +el.price);
    // console.log(priceArr);
    const maxPrice = Math.max(...priceArr);
    // console.log(maxPrice);
    const minPrice = Math.min(...priceArr);
    // console.log(minPrice);
    let avgReview = null;
    // console.log(ProductReviews);
    if (ProductReviews.length) {
      const reviewArr = ProductReviews.map((el) => +el.rate);
      avgReview = Math.round(
        reviewArr.reduce((a, b) => a + b, 0) / reviewArr.length,
      );
    } else avgReview = '0';

    return [
      ...acc,
      {
        id,
        title,
        maxPrice,
        minPrice,
        avgReview,
        category,
        Dev,
        ProductImages,
      },
    ];
  }, []);

  const filteredPrice = productArr.filter(
    (el) => el.minPrice > LowerBoundPrice && el.maxPrice < upperBoundPrice,
  );

  const filteredRating = filteredPrice.filter((el) => {
    if (!el.avgReview) {
      return false;
    }
    return el.avgReview >= rating;
  });

  if (order) {
    filteredRating.sort();
  } else {
    filteredRating.sort();
    filteredRating.reverse();
  }

  // let pageLimit = 20;
  let pageLimit = 8;
  const pageNumber = Math.ceil(filteredRating.length / pageLimit);
  const limitPages = filteredRating.slice(
    (currentPage - 1) * pageLimit,
    currentPage * pageLimit,
  );

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
              <FilterResultPageDropDown
                title="Price"
                LowerBoundPrice={LowerBoundPrice}
                upperBoundPrice={upperBoundPrice}
                setLowerBoundPrice={setLowerBoundPrice}
                setUpperBoundPrice={setUpperBoundPrice}
              />
              <FilterResultPageDropDown title="Rating" setRating={setRating} />
              <FilterResultPageDropDown title="Order by" setOrder={setOrder} />
            </div>
          </div>

          {/* ============ end of filter bar =============== */}
          <div className="flex justify-between w-full">
            <p>
              <span>{filteredRating.length}</span> services available
            </p>
          </div>
          <div className="grid grid-cols-4 gap-x-2 gap-y-3 justify-start">
            {limitPages.map((el, idx) => (
              <Workcard key={idx} workcard={el} />
            ))}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumber={pageNumber}
        />
        <Footer />
      </div>
    </div>
  );
}

export default ResultPage;
