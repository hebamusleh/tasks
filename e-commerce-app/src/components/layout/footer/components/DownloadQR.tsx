const DownloadQR = () => {
  return (
    <div className="flex flex-col  gap-2">
      <h4 className="text-white/70 font-medium text-xs">
        Save $3 with App New User Only
      </h4>
      <div className="flex gap-2">
        <div className="w-20 h-20">
          <img
            src="/assets/images/qr-code.png"
            alt="qr-code"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between gap-1.5">
          <div className="w-[110px] h-[40px]">
            <img
              src="/assets/images/apple-store.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-[110px] h-[40px]">
            <img
              src="/assets/images/google-play.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadQR;
