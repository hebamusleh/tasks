import * as yup from "yup";

const baseAuthSchema = yup.object({
  email: yup
    .string()
    .required("Email or phone number is required")
    .test(
      "is-email-or-phone",
      "Must be a valid email or phone number",
      (value) => {
        if (!value) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const loginSchema = baseAuthSchema;

export const signUpSchema = baseAuthSchema.concat(
  yup.object({
    name: yup.string().required("Name is required"),
  })
);

export const checkoutSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  companyName: yup.string().required("Company name is required"),
  streetAddress: yup.string().required("Street address is required"),
  apartment: yup.string().optional(),
  city: yup.string().required("City is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9+\-() ]+$/, "Invalid phone number"),
  emailAddress: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  savedInformation: yup.boolean().optional(),
});