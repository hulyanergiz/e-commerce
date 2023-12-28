import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosInstance } from "../api/api";
import { PulseLoader } from "react-spinners";

const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const [togglePass1, setTogglePass1] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const submitHandler = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    setIsLoading(true);
    await AxiosInstance.post("/login", formData)
      .then((res) => {
        console.log("Post", res.data.message);
        toast.success("Successfull login!");
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((err) => {
        console.error("Post error:", err);
        toast.error(err.error);
      })
      .finally(() => setIsLoading(false));
    console.log("formData:", formData);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex  flex-col items-center m-auto"
    >
      <div className="flex flex-col gap-4 items-center w-[30%]">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="label-input">
          <label htmlFor="email">Email:</label>
          <input
            className="input"
            type="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: emailRegex,
                message: "Must be a valid email address.",
              },
            })}
          />
        </div>

        {errors.email?.message && (
          <p className="error">{errors.email.message}</p>
        )}

        <div className="label-input">
          <label htmlFor="password">Password:</label>
          <div className="input-icon">
            <input
              className="input"
              type={togglePass1 ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Must be at least 6 characters long.",
                },
              })}
            />
            <div className="-ml-14">
              {togglePass1 ? (
                <FontAwesomeIcon
                  size="xl"
                  icon={faLock}
                  onClick={() => setTogglePass1(!togglePass1)}
                />
              ) : (
                <FontAwesomeIcon
                  size="xl"
                  icon={faEye}
                  onClick={() => setTogglePass1(!togglePass1)}
                />
              )}
            </div>
          </div>
        </div>
        {errors.password && <p className="error">{errors.password.message}</p>}
        {!isLoading ? (
          <button
            type="submit"
            disabled={!isValid}
            className={
              !isValid
                ? "bg-[#23A6F0] text-white p-3 rounded-[5px] w-[150px]"
                : " bg-[#23856D] text-white p-3 rounded-[5px] w-[150px] cursor-pointer"
            }
          >
            Login
          </button>
        ) : (
          <>
            <PulseLoader />
            <button
              type="submit"
              disabled={isLoading}
              className={" bg-[#23A6F0] text-white p-3 rounded-[5px] w-[150px]"}
            >
              Logging In
            </button>
          </>
        )}
      </div>
    </form>
  );
};
export default Login;
