import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppleIcon, VectorIocn } from "../../../../components";

const HeroSwiper = () => {
  return (
    <div className="max-w-[892px] w-full md:border-l-[.5px] md:border-black/30 md:pl-5 pt-10">
      <Swiper
        className="w-full"
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black h-full p-5">
              <div className="flex justify-between gap-10">
                <div className="flex flex-col gap-6 max-w-[294px] pl-5 pt-5">
                  <div className="flex gap-2 items-center">
                    <div className="text-5xl">
                      <AppleIcon />
                    </div>
                    <div className="text-white">iPhone 14 Series</div>
                  </div>
                  <div className="text-5xl font-semibold text-white">
                    Up to 10% off Voucher
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-white !font-medium border-b-[1px] border-white py-2"
                    >
                      Shop Now
                    </a>
                    <span className="text-white text-2xl">
                      <VectorIocn className="rotate-180" />
                    </span>
                  </div>
                </div>
                <div>
                  <img src="/assets/images/hero.png" alt="hero" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center mt-5"></div>
    </div>
  );
};

export default HeroSwiper;
