import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/api";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};
const SignUp = () => {
  const {
    register,
  return <></>;
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { ...initialState }, mode: "onBlur" });

  const submitHandler = (formData) => {
    AxiosInstance.post(
      "https://workintech-fe-ecommerce.onrender.com/",
      formData
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-4 items-center"
    >
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <label>
        Name:
        <input
          className="border-solid border-1 border-[#737373] rounded-[5px]"
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Must be at least three characters long.",
            },
          })}
        />
      </label>
      <label>
        Email:
        <input
          className="border-solid border-1 border-[#737373] rounded-[5px]"
          type="email"
          {...register("email", {
            required: "Email is required.",
            email: "Must be a valid email address.",
          })}
        />
      </label>
      <label>
        Password:
        <input
          className="border-solid border-1 border-[#737373] rounded-[5px]"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Must be at least 6 characters long.",
            },
          })}
        />
      </label>
      <label>
        Confirm Password:
        <input
          className="border-solid border-1 border-[#737373] rounded-[5px]"
          type="password"
          {...register("confirmPassword", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Must be at least 6 characters long.",
            },
          })}
        />
      </label>
      <div>
        <select {...register("role")}>
          <option value="">Choose a role</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="store" name="store" id="store">
            Store
          </option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-[#23A6F0] text-white p-3 rounded-[5px] w-[150px]"
      >
        Sign Up
      </button>
    </form>
  );
};
export default SignUp;
