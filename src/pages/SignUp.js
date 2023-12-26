import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/api";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
  const [togglePass1, setTogglePass1] = useState(false);
  const [togglePass2, setTogglePass2] = useState(false);
  const history = useHistory();
  useEffect(() => {
    AxiosInstance.get("/roles")
      .then((res) => {
        console.log("Role gets", res);
        setRoles(res.data);
      })
      .catch((err) => {
        console.error("Role gets error:", err);
      });
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
        name: data.name,
        phone: data.phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }
    await AxiosInstance.post("/signup", formData)
      .then((res) => {
        console.log("Post", res.data.message);
        toast.success(res.data.message);
        history.push("/");
      })
      .catch((err) => {
        console.error("Post error:", err);
        toast.error(res.error);
      });
    console.log("formData:", formData);
    reset();
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
      {errors.name && <p>{errors.name.message}</p>}
      <label>
        Email:
        <input
          className="border-solid border-1 border-[#737373] rounded-[5px]"
          type="email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: emailRegex,
              message: "Must be a valid email address.",
            },
          })}
        />
      </label>
      {errors.email?.message && <p>{errors.email.message}</p>}
      <label>
        Password:
        <input
          className="border-solid border-1 border-[#737373] rounded-[5px]"
          type={togglePass1 ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Must be at least 6 characters long.",
            },
          })}
        />
        {togglePass1 ? (
          <FontAwesomeIcon
            icon={faLock}
            onClick={() => setTogglePass1(!togglePass1)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => setTogglePass1(!togglePass1)}
          />
        )}
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <label>
        Confirm Password:
        <input
          className="border-solid border-1 border-[#737373] rounded-[5px]"
          type={togglePass2 ? "text" : "password"}
          {...register("confirmPassword", {
            required: "Password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords are not matched",
          })}
        />
        {togglePass2 ? (
          <FontAwesomeIcon
            icon={faLock}
            onClick={() => setTogglePass2(!togglePass2)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => setTogglePass2(!togglePass2)}
          />
        )}
      </label>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <div>
        <select id="role_id" {...register("role_id")}>
          {roles.map((role, i) => (
            <option key={i} value={role.id}>
              {role.code}
            </option>
          ))}
        </select>
      </div>

      {watch("role_id") === "2" && (
        <>
          <label>
            Store Name:
            <input
              className="border-solid border-1 border-[#737373] rounded-[5px]"
              type="text"
              id="name"
              {...register("name", {
                required: "Store name is required",
                minLength: {
                  value: 3,
                  message: "Must be at least three characters long.",
                },
              })}
            />
          </label>
          {errors.name && <p>{errors.name.message}</p>}
          <label>
            Store Phone:
            <input
              className="border-solid border-1 border-[#737373] rounded-[5px]"
              type="tel"
              {...register("phone", {
                required: "Store phone is required",
                pattern: {
                  value: turkeyPhoneRegex,
                  message: "Must be a valid phone number",
                },
              })}
            />
          </label>
          {errors.phone && <p>{errors.phone.message}</p>}
          <label>
            Store Tax ID:
            <input
              className="border-solid border-1 border-[#737373] rounded-[5px]"
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
          </label>
          {errors.tax_no && <p>{errors.tax_no.message}</p>}
          <label>
            Store Bank Account:
            <input
              className="border-solid border-1 border-[#737373] rounded-[5px]"
              type="text"
              {...register("bank_account", {
                required: "Store Bank Account is required",
                pattern: {
                  value: ibanRegex,
                  message: "Must be a valid store bank account",
                },
              })}
            />
          </label>
          {errors.bank_account && <p>{errors.bank_account.message}</p>}
        </>
      )}
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
    </form>
  );
};
export default SignUp;
