import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/api";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

const emailRegex = new RegExp(/^\S+@\S+\.\S+$/);
const ibanRegex = new RegExp(
  /[A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{4} ?\d{4} ?\d{2}/gm
);
const turkeyPhoneRegex = new RegExp(/^(\+90)?[0-9]{10}$/);

const SignUp = () => {
  const {
    register,
    watch,
    getValues,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { role_id: "3" }, mode: "all" });

  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [togglePass1, setTogglePass1] = useState(false);
  const [togglePass2, setTogglePass2] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setIsLoading(true);
    AxiosInstance.get("/roles")
      .then((res) => {
        console.log("Role gets", res);
        setRoles(res.data);
      })
      .catch((err) => {
        console.error("Role gets error:", err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  const submitHandler = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: watch("role_id"),
    };
    if (watch("role_id") === "2") {
      formData.store = {
        name: data.store_name,
        phone: data.phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }
    setIsLoading(true);
    await AxiosInstance.post("/signup", formData)
      .then((res) => {
        console.log("Post", res.data.message);
        localStorage.setItem("token", res.data.token);
        toast.success(
          "You need to click link in email to activate your account!"
        );
        setTimeout(() => {
          history.push("/login");
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
      <h1 className="text-2xl font-bold">
        Register <h3 className="text-xl"> Sign Up</h3>
      </h1>

      <div className="flex flex-col gap-4 items-center w-[30%]">
        <div className="label-input">
          <label htmlFor="name">Name:</label>
          <input
            className="input"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Must be at least three characters long.",
              },
            })}
          />
        </div>

        {errors.name && <p className="error">{errors.name.message}</p>}
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
                  icon={faEyeSlash}
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
        <div className="label-input">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <div className="input-icon">
            <input
              className="input"
              type={togglePass2 ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Password is required",
                validate: (value) =>
                  value === getValues("password") ||
                  "Passwords are not matched",
              })}
            />
            <div className="-ml-14">
              {togglePass2 ? (
                <FontAwesomeIcon
                  size="xl"
                  icon={faEyeSlash}
                  onClick={() => setTogglePass2(!togglePass2)}
                />
              ) : (
                <FontAwesomeIcon
                  size="xl"
                  icon={faEye}
                  onClick={() => setTogglePass2(!togglePass2)}
                />
              )}
            </div>
          </div>
        </div>

        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
        <div className="flex flex-row items-center gap-4 text-xl justify-center py-1 px-2 border-solid border-2  border-[#737373] rounded-md w-[150px]">
          <select
            id="role_id"
            value={watch("role_id")}
            {...register("role_id")}
          >
            {roles.map((role, i) => (
              <option key={i} value={role.id}>
                {role.code}
              </option>
            ))}
          </select>
        </div>

        {watch("role_id") === "2" && (
          <>
            <div className="label-input">
              <label htmlFor="store_name">Store Name:</label>
              <input
                className="input"
                type="text"
                id="store_name"
                {...register("store_name", {
                  required: "Store name is required",
                  minLength: {
                    value: 3,
                    message: "Must be at least three characters long.",
                  },
                })}
              />
            </div>
            {errors.store_name && <p>{errors.store_name.message}</p>}
            <div className="label-input">
              <label htmlFor="phone">Store Phone:</label>
              <input
                className="input"
                type="tel"
                {...register("phone", {
                  required: "Store phone is required",
                  pattern: {
                    value: turkeyPhoneRegex,
                    message: "Must be a valid phone number",
                  },
                })}
              />
            </div>

            {errors.phone && <p className="error">{errors.phone.message}</p>}
            <div className="label-input">
              <label htmlFor="tax_no">Store Tax ID:</label>
              <input
                className="input"
                type="text"
                {...register("tax_no", {
                  required: "Store Tax ID is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message:
                      "Must be a valid tax ID in this format: TXXXXVXXXXXX",
                  },
                })}
              />
            </div>

            {errors.tax_no && <p className="error">{errors.tax_no.message}</p>}
            <div className="label-input">
              <label htmlFor="bank_account">Store Bank Account:</label>
              <input
                className="input"
                type="text"
                {...register("bank_account", {
                  required: "Store Bank Account is required",
                  pattern: {
                    value: ibanRegex,
                    message: "Must be a valid store bank account",
                  },
                })}
              />
            </div>

            {errors.bank_account && (
              <p className="error">{errors.bank_account.message}</p>
            )}
          </>
        )}
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
            Sign Up
          </button>
        ) : (
          <>
            <PulseLoader />
            <button
              type="submit"
              disabled={isLoading}
              className={" bg-[#23A6F0] text-white p-3 rounded-[5px] w-[150px]"}
            >
              Signing Up
            </button>
          </>
        )}
      </div>
    </form>
  );
};
export default SignUp;
