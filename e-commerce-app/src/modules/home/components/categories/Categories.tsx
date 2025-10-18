import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryCard, TitleHeading } from "../../../../components";
import { useGetCategories } from "../../../../hooks";
import SubHeader from "./SubHeader";

const Categories = () => {
  const { data, isLoading } = useGetCategories();

  console.log("data ", data);
  return (
    <div className="flex flex-col gap-[60px] border-b-[0.5px] border-black/30 pb-20">
      <div>
        <TitleHeading title="Categories" />
        <SubHeader />
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={6}
        className="w-full"
        navigation={{
          nextEl: ".custom-category-next-button",
          prevEl: ".custom-category-prev-button",
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        breakpoints={{
          375: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
      >
        {isLoading
          ? [...Array(7)].map((_, index) => (
              <SwiperSlide key={index} className="!w-[170px]">
                <div>loading...</div>
              </SwiperSlide>
            ))
          : data.map((item: { slug: string; name: string }) => (
              <SwiperSlide key={item.slug} className="!w-[170px]">
                <CategoryCard title={item.name} id={item.slug} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default Categories;
