import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import type { InferType } from "yup";
import { Button, Input } from "../../../components";
import { PATHS } from "../../../constant";
import { loginSchema } from "../../../utils";

type LoginFormValues = InferType<typeof loginSchema>;
const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-12 h-full justify-center w-full max-w-[400px] py-14 px-5 lg:px-0 lg:py-0 ">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-medium text-black">Log in to Exclusive</h2>
        <p>Enter your details below</p>
      </div>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="email"
          placeholder="Email or Phone Number"
          error={errors.email?.message}
        />
        <Input
          control={control}
          name="password"
          placeholder="Password"
          error={errors.password?.message}
          type="password"
        />
        <div className="flex items-center justify-between gap-4">
          <Button type="submit">Log In</Button>
          <div>
            <Link
              to={PATHS.SIGN_UP}
              className="text-[#DB4444] border-b-[1px] border-[#DB4444]"
            >
              SignUp
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
