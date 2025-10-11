import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, GoogleIcon, Input } from "../../../components";
import { PATHS } from "../../../constant";

const SignUpForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = () => {};
  return (
    <div className="flex flex-col gap-12 h-full justify-center w-full max-w-[400px] py-14 px-5 lg:px-0 lg:py-0">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-medium text-black">Create an account</h2>
        <p>Enter your details below</p>
      </div>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-10">
          <Input
            control={control}
            name="name"
            placeholder="Name"
            error={errors.name?.message}
          />
          <Input
            control={control}
            name="mail"
            placeholder="Email or Phone Number"
            error={errors.mail?.message}
          />
          <Input
            control={control}
            name="password"
            placeholder="Password"
            error={errors.password?.message}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button type="submit">Create Account</Button>
          <Button type="submit" variant="outline">
            <div className="flex gap-2 items-center justify-center">
              <span className="text-2xl">
                <GoogleIcon />
              </span>
              <span>Sign up with Google</span>
            </div>
          </Button>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <span className="text-black/70">Already have account?</span>
          <Link
            to={PATHS.LOGIN}
            className="py-1 border-b-[1px] border-black/70 text-black/70"
          >
            {" "}
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
