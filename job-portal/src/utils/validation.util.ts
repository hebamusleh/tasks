import * as yup from "yup";

export const formSchema = yup.object({
  companyName: yup.string().required("Company name is required"),
  websiteLink: yup
    .string()
    .url("Invalid URL")
    .required("Website link is required"),
  jobTitle: yup.string().required("Job title is required"),
  jobCategory: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Job category is required"),
  jobType: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Job type is required"),
  location: yup.string().required("Location is required"),
  salaryRange: yup.string().required("Salary range is required"),
  experience: yup.string().required("Experience is required"),
  featured: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Featured is required"),
  description: yup.string().required("Description is required"),
});
