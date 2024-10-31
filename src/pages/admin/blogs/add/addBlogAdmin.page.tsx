import { api } from "@/sdk";
import { CreateBlogData } from "@/types/blog.type";
import { path } from "@/utils/path.util";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useFormik } from "formik";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import * as y from "yup";

const status = [
  { key: "DRAFT", label: "Draft" },
  { key: "PUBLISHED", label: "Published" },
  { key: "ARCHIVED", label: "Archived" },
];

export default function AddBlogAdmin() {
  const formRef = useRef<HTMLFormElement>(null);

  const triggerFormSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const navigate = useNavigate();

  const { trigger, isMutating, error } = useSWRMutation(
    "/api/admin/blogs/create",
    api.blog.createBlogByAdmin,
    {
      onSuccess: (data) => {
        navigate(path.admin.blogs());
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      summary: "",
      thumbnailUrl: "",
      bodyHtml: "",
      status: "",
    },
    validationSchema: y.object({
      title: y.string().required("Required"),
      summary: y.string().required("Required"),
      thumbnailUrl: y.string().url().required("Required"),
      bodyHtml: y.string().required("Required"),
      status: y
        .string()
        .oneOf(
          ["DRAFT", "PUBLISHED", "ARCHIVED"],
          "Status must be DRAFT, PUBLISHED, or ARCHIVED",
        ),
    }),
    onSubmit: (values) => {
      trigger({
        title: values.title,
        summary: values.summary,
        thumbnailUrl: values.thumbnailUrl,
        bodyHtml: values.bodyHtml,
        status: values.status as CreateBlogData["status"],
      });
    },
  });

  return (
    <>
      <div className="md:col-span-7 lg:col-span-8">
        <form ref={formRef} onSubmit={formik.handleSubmit}>
          <div className="text-red-500">{error && error.message}</div>
          <Input
            id="title"
            label="Title"
            isRequired
            {...formik.getFieldProps("title")}
            isInvalid={formik.touched.title && !!formik.errors.title}
            errorMessage={formik.errors.title}
          />
          <Textarea
            id="summary"
            label="Summary"
            isRequired
            {...formik.getFieldProps("summary")}
            isInvalid={formik.touched.summary && !!formik.errors.summary}
            errorMessage={formik.errors.summary}
          />
          <Input
            id="thumbnailUrl"
            label="Thumbnail Url"
            isRequired
            {...formik.getFieldProps("thumbnailUrl")}
            isInvalid={
              formik.touched.thumbnailUrl && !!formik.errors.thumbnailUrl
            }
            errorMessage={formik.errors.thumbnailUrl}
          />
          <Textarea
            id="bodyHtml"
            label="Body Html"
            isRequired
            {...formik.getFieldProps("bodyHtml")}
            isInvalid={formik.touched.bodyHtml && !!formik.errors.bodyHtml}
            errorMessage={formik.errors.bodyHtml}
          />
          <Select
            label="Select a status"
            id="status"
            {...formik.getFieldProps("status")}
            isInvalid={formik.touched.status && !!formik.errors.status}
            errorMessage={formik.errors.status}
          >
            {status.map((stat) => (
              <SelectItem key={stat.key}>{stat.label}</SelectItem>
            ))}
          </Select>
        </form>
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <Button
          onClick={triggerFormSubmit}
          isLoading={isMutating}
          className="justify-start"
        >
          Submit
        </Button>
        <Button className="justify-start">Cancel</Button>
      </div>
    </>
  );
}
