import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCards,
  EffectFade,
} from "swiper/modules";
import { useAppContext } from "./AppContext";
import { useMediaQuery } from "react-responsive";

const PortfolioSlider = () => {
  const { portfolioImgs } = useAppContext();
  const isTabletOrLarger = useMediaQuery({ minWidth: "768px" });
    const modules = [
    Navigation,
    Pagination,
    Autoplay,
    isTabletOrLarger ? EffectFade : EffectCards,
  ];
  return (
    <div className="my-5" style={{ maxWidth: "100%", margin: "0 auto" }}>
      <h2>Galeri</h2>
      <Swiper
        modules={modules}
        autoplay={{ delay: 3000 }}
        loop={true}
        {...(isTabletOrLarger
          ? {
              effect: "fade",
              fadeEffect: { crossFade: true },
              slidesPerView: 5,
              spaceBetween: 30,
              centeredSlides: true,
            }
          : {
              effect: "cards",
              slidesPerView: 3,
              grabCursor: true,
            })}
      >
        {portfolioImgs &&
          portfolioImgs.map((p, index) => (
            <SwiperSlide key={index}>
              <div
                className="card text-white bg-dark"
                style={{ height: "20vh" }}
              >
                <img
                  src={p.image}
                  alt={`${p.title} ${index + 1}`}
                  className="card-img"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                  <h5 className="card-title">{p.title.split("|")[0]}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
