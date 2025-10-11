import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-10">
      <div className="hidden lg:block lg:basis-1/2">
        <img src="/assets/images/auth.png" alt="auth" className="w-full h-full" />
      </div>
      <div className="flex-1  md:basis-1/2 flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
