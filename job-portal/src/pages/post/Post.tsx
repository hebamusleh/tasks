import { useForm } from "react-hook-form";
import { Button, Input, SelectInput } from "../../components";
import { JOB_TYPE } from "../../enum";

const Post = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="py-4 bg-[#F4F5F7]">
        <h3 className="title container text-center">Create a Job</h3>
      </div>
      <div className="py-4 container mb-7">
        <form
          className="p-5 border-[1px] border-[#D6D6D6] rounded-[10px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col gap-5 h-[90vh]">
            <div className="flex flex-col md:flex-row gap-5">
              <Input
                control={control}
                name="company-name"
                label="Company Name"
                placeholder="Name"
              />
              <Input
                control={control}
                name="website-link"
                label="Company Website"
                placeholder="Website Link"
              />
            </div>
            <Input
              control={control}
              name="job-title"
              label="Job Title"
              placeholder="Job Title"
            />
            <div className="flex flex-col md:flex-row gap-5">
              <SelectInput
                control={control}
                label="Job Category"
                name="job-category"
                options={[
                  {
                    label: "Technology",
                    value: "Technology",
                  },
                ]}
              />
              <SelectInput
                control={control}
                label="Job Type"
                name="job-type"
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
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Input
                control={control}
                name="location"
                label="Job Location"
                placeholder="location"
              />
              <Input
                control={control}
                name="location"
                label="Salary Range"
                placeholder="Salary Range"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Input
                control={control}
                name="experience"
                label="Experience"
                placeholder="Experience"
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
              />
            </div>
            <Input
              control={control}
              name="description"
              type="textarea"
              label="Job Description"
              placeholder="job description"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Post Job</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
