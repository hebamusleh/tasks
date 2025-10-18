import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, ProductCard, TitleHeading } from "../../../../components";
import { useGetProduct } from "../../../../hooks";
import type { IProduct } from "../../../../models/products/product.model";
import ProductSkeletonCard from "./../../../../components/common/skeleton/ProductSkeletonCard";
import SubHeader from "./SubHeader";

const TodayProducts = () => {
  const { data, isLoading } = useGetProduct({
    limit: 10,
    order: "desc",
  });
  return (
    <div className="border-b-[0.5px] border-black/30 pb-20">
      <TitleHeading title="Today’s" />
      <SubHeader />

      {isLoading ? (
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
          {[...Array(6)].map((_, indx) => (
            <SwiperSlide key={indx}>
              <ProductSkeletonCard />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
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
          {data.map((item: IProduct) => (
            <SwiperSlide key={item.id}>
              <ProductCard
                cover={item.thumbnail}
                price={item.price}
                reviewsNum={item.rating}
                title={item.title}
                offer={item.discountPercentage}
                id={item.id}
                oldPrice={item.price * item.discountPercentage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="w-full flex items-center justify-center mt-20">
        <Button>View All Product</Button>
      </div>
    </div>
  );
};

export default TodayProducts;
