import { signIn } from "next-auth/react";
import Link from "next/link";
import type { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SigninProps {}

interface IAuthForms {
  email: string;
  password: string;
}

const Signin: FC<SigninProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForms>({
    defaultValues: {
      email: "test@test.com",
      password: "123456",
    },
  });

  const onSubmit: SubmitHandler<IAuthForms> = async (data) => {
    const res = await signIn("credentials", {
      ...data,
      // redirect: false,
      callbackUrl: "/",
    });
    // alert(JSON.stringify(res));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-3/12 mt-20 mx-auto p-6 bg-white shadow-xl rounded-md border border-gray-100"
    >
      <h1 className="text-2xl text-center text-gray-700 font-bold my-3">
        登入账号
      </h1>
      <input
        type="text"
        className="w-full border my-3 p-2 rounded-md"
        placeholder="邮箱"
        {...register("email")}
      />
      <input
        type="text"
        className="w-full border my-3 p-2 rounded-md"
        placeholder="密码"
        {...register("password")}
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-700 hover:bg-blue-800 rounded-md text-white my-3"
      >
        登入
      </button>

      <p className="text-center">
        还没有账号？ 点此
        <Link href="/signup">
          <a className="text-blue-700">注册</a>
        </Link>
      </p>
    </form>
  );
};
export default Signin;
