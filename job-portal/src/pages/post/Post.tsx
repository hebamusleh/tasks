import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { InferType } from "yup";
import { Button, Input, SelectInput } from "../../components";
import { JOB_TYPE, QUERIES } from "../../enum";
import { useGetCategories, usePostJob, useUpdateJob } from "../../hooks";
import { useJobStore, useModalStore } from "../../store";
import { UnProcessableEntityError, type IJobBody } from "../../types";
import { formSchema } from "../../utils";

type FormValues = InferType<typeof formSchema>;

const Post = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { data, isLoading } = useGetCategories();
  const { mutate: postJob, isPending: posting } = usePostJob();
  const { mutate: updateJob, isPending: updating } = useUpdateJob();
  const queryClient = useQueryClient();

  const { setModal } = useModalStore();
  const { job } = useJobStore();
  console.log({ job });

  const categoryOptions = data?.map((item: { id: string; name: string }) => ({
    label: item.name,
    value: item.name,
  }));

  const onSubmit = (data: FormValues) => {
    const body: IJobBody = {
      category: data.jobCategory.value,
      company_name: data.companyName,
      description: data.description,
      experience: data.experience,
      featured: data.featured.value,
      location: data.location,
      salary: data.salaryRange,
      title: data.jobTitle,
      type: data.jobType.value,
      website: data.websiteLink,
    };
    if (job) {
      updateJob(
        { id: job.id, body },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [QUERIES.JOBS],
            });
            setModal({
              open: true,
              title: "Saved Changes",
              message: "Job updated successfully",
            });
            reset();
            clearErrors();
          },
          onError: (e) => {
            if (e instanceof UnProcessableEntityError) {
              setModal({
                open: true,
                title: "Changes Failure",
                message: "Job updated failure",
              });
              return;
            }
            setModal({
              open: true,
              title: "Changes Failure",
              message: "Job updated failure",
            });
          },
        }
      );
    } else {
      postJob(body, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [QUERIES.JOBS],
          });
          setModal({
            open: true,
            title: "Job Added",
            message: "Job added successfully",
          });
          reset();
          clearErrors();
        },
        onError: (e) => {
          if (e instanceof UnProcessableEntityError) {
            setModal({
              open: true,
              title: "Added Failure",
              message: e.message,
            });
            return;
          }
          setModal({
            open: true,
            title: "Added Failure",
            message: "Job added failure",
          });
        },
      });
    }
  };

  useEffect(() => {
    if (job) {
      reset({
        companyName: job.company_name,
        description: job.description,
        experience: job.experience,
        featured: {
          label: job.featured,
          value: job.featured,
        },
        jobCategory: {
          label: job.category,
          value: job.category,
        },
        jobTitle: job.title,
        jobType: {
          label: job.type,
          value: job.type,
        },
        location: job.location,
        salaryRange: job.salary,
        websiteLink: job.website,
      });
    }
  }, [reset, job]);

  return (
    <div>
      <div className="py-4 bg-[#F4F5F7]">
        <h3 className="title container text-center">
          {job.id ? "Update Job" : "Create a Job"}
        </h3>
      </div>
      <div className="py-4 container mb-7">
        <form
          className="p-5 border-[1px] border-[#D6D6D6] rounded-[10px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col gap-5 min-h-[90vh]">
            <div className="flex flex-col md:flex-row gap-5">
              <Input
                control={control}
                name="companyName"
                label="Company Name"
                placeholder="Name"
                error={errors.companyName?.message}
              />
              <Input
                control={control}
                name="websiteLink"
                label="Company Website"
                placeholder="Website Link"
                error={errors.websiteLink?.message}
              />
            </div>
            <Input
              control={control}
              name="jobTitle"
              label="Job Title"
              placeholder="Job Title"
              error={errors.jobTitle?.message}
            />
            <div className="flex flex-col md:flex-row gap-5">
              <SelectInput
                control={control}
                label="Job Category"
                name="jobCategory"
                options={categoryOptions}
                error={errors.jobCategory?.message}
                isLoading={isLoading}
              />
              <SelectInput
                control={control}
                label="Job Type"
                name="jobType"
                options={[
                  {
                    label: JOB_TYPE.FULL_TIME,
                    value: JOB_TYPE.FULL_TIME,
                  },
                  {
                    label: JOB_TYPE.PART_TIME,
                    value: JOB_TYPE.PART_TIME,
                  },
                  {
                    label: JOB_TYPE.CONTRACT,
                    value: JOB_TYPE.CONTRACT,
                  },
                ]}
                error={errors.jobType?.message}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Input
                control={control}
                name="location"
                label="Job Location"
                placeholder="location"
                error={errors.location?.message}
              />
              <Input
                control={control}
                name="salaryRange"
                label="Salary Range"
                placeholder="Salary Range"
                error={errors.salaryRange?.message}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Input
                control={control}
                name="experience"
                label="Experience"
                placeholder="Experience"
                error={errors.experience?.message}
              />
              <SelectInput
                control={control}
                name="featured"
                label="Featured"
                options={[
                  {
                    label: "Yes",
                    value: "yes",
                  },
                  {
                    label: "No",
                    value: "no",
                  },
                ]}
                error={errors.featured?.message}
              />
            </div>
            <Input
              control={control}
              name="description"
              type="textarea"
              label="Job Description"
              placeholder="job description"
              error={errors.description?.message}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">
              {posting || updating
                ? "loading"
                : job
                ? "update Job"
                : "Post Job"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
