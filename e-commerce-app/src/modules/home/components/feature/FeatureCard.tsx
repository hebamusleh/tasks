const FeatureCard = ({
  className,
  title,
  description,
  image,
  flip,
  imageWrapper,
}: {
  className?: string;
  title: string;
  description: string;
  image: string;
  flip?: boolean;
  imageWrapper?: string;
}) => {
  return (
    <div className={`w-full rounded-[4px] relative bg-black overflow-hidden ${className}`}>
      <div
        className={`absolute  w-full h-full ${
          imageWrapper ? imageWrapper : "inset-0"
        }`}
      >
        <img
          src={image}
          alt="products"
          className={`w-full h-full object-contain ${
            flip ? "-scale-x-100" : ""
          }`}
        />
      </div>

      <div className="flex flex-col p-8 h-full justify-end relative z-20">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="max-w-[242px] text-sm text-white">{description}</p>
          <a href="#" className="underline font-medium text-white">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
