import { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';

function CarouselLanding({ width }) {
  // const [photo, setPhoto] = useState('');
  // console.log(
  //   productArr.filter((el) => {
  //     console.log(el.ProductImages);
  //     // setPhoto(el.ProductImages);
  //   }),
  // );
  const data = [
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657008118/dev-cat/product-image/vxk8xbcs2spwfrksoxuq.jpg',
      // caption: 'Design and develop all types of Web Applications',
    },
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657011935/dev-cat/product-image/x63losmgjugzvzwrjyhn.jpg',
      // caption: 'The website offers products or services.',
    },
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657008118/dev-cat/product-image/cedr2scmxqmr6toge66d.jpg',
      // caption: 'Build Web with Php Laravel, VueJs',
    },
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657010232/dev-cat/product-image/zxqflbmyb29zpibicmwx.jpg',
      // caption: 'Get RESPONSIVE WEBSITE (HTML&CSS)',
    },
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657009975/dev-cat/product-image/nbdmspidsuonbuzbxnib.png',
      // caption: 'Web Design & Development Programming',
    },
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657010232/dev-cat/product-image/zxqflbmyb29zpibicmwx.jpg',
      // caption: 'Get an Android Application || Student Project',
    },
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657010236/dev-cat/product-image/zoch3rkrhbidip6shucr.jpg',
      // caption: 'Design all types of ux/ui designers with Figma.',
    },
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657011243/dev-cat/product-image/rqv7pfe8pstgmwofd2kz.jpg',
      // caption: 'Developing back-end systems',
    },
    {
      image:
        'https://res.cloudinary.com/myclound/image/upload/v1657011935/dev-cat/product-image/fhujvf3jvgrqhpecqztx.jpg',
      // caption: 'Darjeeling',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className=" max-w-screen-xl">
      <Carousel
        data={data}
        time={2000}
        width={width}
        height="500px"
        // captionStyle={captionStyle}
        radius="10px"
        //   slideNumber={true}
        //   slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={false}
        //   thumbnailWidth="100px"
        style={{
          // textAlign: 'center',
          //   width: '1024px',
          minWidth: '1024px',
          height: '500px',
        }}
      />
    </div>
  );
}

export default CarouselLanding;
