import Logo from "@/components/Logo/Logo";
import { api } from "@/sdk";
import { path } from "@/utils/path.util";
import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { ChevronLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import * as y from "yup";

export default function SignUp() {
  const { trigger, isMutating, error } = useSWRMutation(
    "/",
    api.auth.register,
    {
      onSuccess: (data) => {
        Cookies.set("token", data.token);
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: y.object({
      displayName: y.string().required("Required"),
      email: y.string().email("Invalid email address").required("Required"),
      password: y.string().min(6).required("Password is required"),
      confirmPassword: y
        .string()
        .oneOf([y.ref("password"), undefined], "Password must match")
        .required(),
    }),
    onSubmit: (values) => {
      trigger({
        displayName: values.displayName,
        email: values.email,
        password: values.password,
      });
    },
  });

  console.log(formik.errors);
  console.log(formik.touched);
  console.log(error);
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="flex w-full flex-row justify-start p-5">
        <Button
          radius="full"
          isIconOnly
          onClick={() => navigate(-1)}
          className="text-gray-500"
        >
          <ChevronLeftIcon />
        </Button>
      </div>
      <div className="flex w-[440px] flex-col gap-8">
        <div className="flex flex-col items-center gap-5">
          <Logo className="size-12" />
          <h2 className="text-2xl font-bold">
            Sign up to OrigamiGo Newsletter
          </h2>
        </div>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>{error && error.message}</div>
          <Input
            name="displayName"
            label="Display name"
            onChange={formik.handleChange}
            value={formik.values.displayName}
            isInvalid={
              formik.touched.displayName && !!formik.errors.displayName
            }
            errorMessage={formik.errors.displayName}
          />
          <Input
            name="email"
            label="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            isInvalid={formik.touched.email && !!formik.errors.email}
            errorMessage={formik.errors.email}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            isInvalid={formik.touched.password && !!formik.errors.password}
            errorMessage={formik.errors.password}
          />
          <Input
            name="confirmPassword"
            type="password"
            label="Confirm password"
            onChange={formik.handleChange}
            isInvalid={
              formik.touched.confirmPassword && !!formik.errors.confirmPassword
            }
            value={formik.values.confirmPassword}
            errorMessage={formik.errors.confirmPassword}
          />

          <Button
            size="lg"
            color="primary"
            className="!mt-6 w-full bg-blue-600 font-bold"
            type="submit"
            isLoading={isMutating}
          >
            Sign up
          </Button>
        </form>

        <div>
          <p className="text-center">
            Have an account?{" "}
            <Link
              className="font-bold text-blue-600 hover:underline"
              to={path.signIn()}
            >
              Login instead
            </Link>
          </p>
          <p className="mt-6 text-center text-[13px] text-gray-500">
            By registering you agree to OrigamiGo's Terms of Service, our
            Privacy Policy, and our Information Collection Notice
          </p>
        </div>
      </div>
    </div>
  );
}
