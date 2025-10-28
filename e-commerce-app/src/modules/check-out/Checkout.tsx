import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import type { InferType } from "yup";
import { Button, Input } from "../../components";
import Checkbox from "../../components/common/checkbox/Checkbox";
import { checkoutSchema } from "../../utils";

type FormValues = InferType<typeof checkoutSchema>;

const Checkout = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="container my-20">
      <h3 className="text-4xl font-medium">Billing Details</h3>
      <form
        className="flex flex-col justify-between md:flex-row mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-8 w-full">
          <Input
            control={control}
            name="fullName"
            placeholder="Full Name *"
            error={errors.fullName?.message}
          />
          <Input
            control={control}
            name="companyName"
            placeholder="Company Name *"
            error={errors.companyName?.message}
          />
          <Input
            control={control}
            name="streetAddress"
            placeholder="Street Address *"
            error={errors.streetAddress?.message}
          />
          <Input
            control={control}
            name="apartment"
            placeholder="Apartment, floor, etc. (optional)"
            error={errors.apartment?.message}
          />
          <Input control={control} name="city" placeholder="Town/City *" />
          <Input
            control={control}
            name="phoneNumber"
            placeholder="Phone Number *"
            error={errors.phoneNumber?.message}
          />
          <Input
            control={control}
            name="emailAddress"
            placeholder="Email Address *"
            error={errors.emailAddress?.message}
          />
          <Checkbox
            control={control}
            name="savedInformation"
            label="Save this information for faster check-out next time"
            error={errors.savedInformation?.message}
          />
          <div>
            <Button type="submit">Place Order</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
