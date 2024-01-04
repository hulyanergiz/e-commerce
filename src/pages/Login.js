import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/actions/userActions";
import { PulseLoader } from "react-spinners";
import { NavLink } from "reactstrap";

const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid, isLoading },
  } = useForm({ mode: "all" });
  const [togglePass1, setTogglePass1] = useState(false);
  const [token, setToken] = useLocalStorage("token", "");
  const [name, setName] = useLocalStorage("name", "");
  const history = useHistory();
  const dispatch = useDispatch();

  const loginSubmitHandler = (formData) => {
    dispatch(userLogin(formData, history, setToken, setName));
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(loginSubmitHandler)}
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
      <div className="text-2xl flex flex-row gap-2">
        <p>To create a new account:</p>
        <span className="text-[#23A6F0]">
          <NavLink href="/signup">Click Here</NavLink>
        </span>
      </div>
    </form>
  );
};
export default Login;
