import { Button } from "../../../components";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative">
      <div className="absolute inset-0 w-full h-[90vh] -z-10">
        <img
          src="/assets/images/bg-image.png"
          alt="hero bg"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="z-10 flex items-center justify-center h-[90vh]">
        <div className="container">
          <div className="w-full md:w-[678px] flex flex-col gap-3">
            <div className="text-[50px] md:text-[70px] font-bold mt-6 leading-[150%]">
              Find A<span className="text-[#338573]"> Job</span>
              That <span className="text-[#338573]">Matches</span> Your Passion
            </div>
            <span className="text-xl text-[#616161]  leading-[150%]">
              Hand-picked opportunities to work from home, remotely, freelance,
              full-time, part-time, contract and internships.
            </span>
            <div className="bg-white rounded-[20px] flex mt-5">
              <input
                type="text"
                className="w-full outline-none border-none placeholder:text-[#AEB0B4] placeholder:text-[18px] px-7 py-2 placeholder:font-bold"
                placeholder="Search by job title......................"
              />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
