import Logo from "@/components/Logo/Logo";
import { useAuth } from "@/contexts/auth-context";
import { api } from "@/sdk";
import { path } from "@/utils/path.util";
import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { ChevronLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import * as y from "yup";

export default function Login() {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();
  const { trigger, isMutating, error } = useSWRMutation("/", api.auth.login, {
    onSuccess: (data) => {
      Cookies.set("token", data.token);
      console.log(data);
      setUser(data.user);
      navigate(path.home());
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: y.object({
      email: y.string().email("Invalid email address").required("Required"),
      password: y.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      trigger({
        email: values.email,
        password: values.password,
      });
    },
  });

  // console.log(error);

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
          <h2 className="text-2xl font-bold">Login to OrigamiGo</h2>
        </div>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="text-red-500">{error && error.message}</div>
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

          <Button
            size="lg"
            color="primary"
            className="!mt-6 w-full bg-blue-600 font-bold"
            type="submit"
            isLoading={isMutating}
          >
            Login
          </Button>
        </form>

        <div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              className="font-bold text-blue-600 hover:underline"
              to={path.signUp()}
            >
              Sign up instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
