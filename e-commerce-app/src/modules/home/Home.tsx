import {
  Categories,
  CTA,
  CTACategories,
  Feature,
  Hero,
  MonthProducts,
  Products,
  TodayProducts,
} from "./components";

const Home = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col gap-14 md:gap-28">
        <Hero />
        <TodayProducts />
        <Categories />
        <MonthProducts />
        <CTACategories />
        <Products />
        <Feature />
        <CTA />
      </div>
    </div>
  );
};

export default Home;
