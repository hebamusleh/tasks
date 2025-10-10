import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, ProductCard, TitleHeading } from "../../../../components";
import { flashProducts } from "../../../../constant";
import SubHeader from "./SubHeader";

const TodayProducts = () => {
  return (
    <div className="border-b-[0.5px] border-black/30 pb-20">
      <TitleHeading title="Today’s" />
      <SubHeader />

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={4.5}
        className="mt-10"
        navigation={{
          nextEl: ".custom-next-button",
          prevEl: ".custom-prev-button",
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        breakpoints={{
          375: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          400: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {flashProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex items-center justify-center mt-20">
        <Button>View All Product</Button>
      </div>
    </div>
  );
};

export default TodayProducts;
