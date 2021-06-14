import React, { useEffect, useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const [imgSlidePos, setImgSlidePos] = useState(0);
  // const [transition, setTransition] = useState("ease-in 1s");
  const [animationTime, setAnimationTime] = useState(3000);

  let slideCrouselImage = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Milaap_Hero_pc1x._CB669734096_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg",
  ];

  useEffect(() => {
 
    window.setTimeout(() => {
      goRight();
    }, animationTime);
  }, [imgSlidePos]);

  function goRight() {
    if (imgSlidePos === -100 * (slideCrouselImage.length - 1)) {
      setAnimationTime(0);
      // setTransition("none");
      setImgSlidePos(0);
    } else {
      setAnimationTime(3000);
      setImgSlidePos(imgSlidePos - 100);
      // setTransition("ease-in 3s");
    }
  }

  return (
    <>
      <div className="slider">
        {slideCrouselImage.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(${imgSlidePos}%)`,
                // transition: transition,
              }}
            >
              <img className="home_image" src={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
