import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role_id: "3",
  storeName: "",
  storePhone: "",
  storeTaxID: "",
  storeBankAccount: "",
};
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
    formState: { errors },
  } = useForm({ defaultValues: { ...initialState }, mode: "all" });

  const [roles, setRoles] = useState([]);
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
  const submitHandler = (formData) => {
    AxiosInstance.post("/signup", formData)
      .then((res) => {
        console.log("Post", res);
        history.back();
      })
      .catch((err) => {
        console.error("Post error:", err);
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
      {errors.password && <p>{errors.password.message}</p>}
      <label>
        Confirm Password:
        <input
          className="border-solid border-1 border-[#737373] rounded-[5px]"
          type="password"
          {...register("confirmPassword", {
            required: "Password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords are not matched",
          })}
        />
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
              {...register("storeName", {
                required: "Store name is required",
                minLength: {
                  value: 3,
                  message: "Must be at least three characters long.",
                },
              })}
            />
          </label>
          {errors.storeName && <p>{errors.storeName.message}</p>}
          <label>
            Store Phone:
            <input
              className="border-solid border-1 border-[#737373] rounded-[5px]"
              type="tel"
              {...register("storePhone", {
                required: "Store phone is required",
                pattern: {
                  value: turkeyPhoneRegex,
                  message: "Must be a valid phone number",
                },
              })}
            />
          </label>
          {errors.storePhone && <p>{errors.storePhone.message}</p>}
          <label>
            Store Tax ID:
            <input
              className="border-solid border-1 border-[#737373] rounded-[5px]"
              type="text"
              {...register("storeTaxID", {
                required: "Store Tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message:
                    "Must be a valid tax ID in this format: TXXXXVXXXXXX",
                },
              })}
            />
          </label>
          {errors.storeTaxID && <p>{errors.storeTaxID.message}</p>}
          <label>
            Store Bank Account:
            <input
              className="border-solid border-1 border-[#737373] rounded-[5px]"
              type="text"
              id="storeBankAccount"
              {...register("storeBankAccount", {
                required: "Store Bank Account is required",
                pattern: {
                  value: ibanRegex,
                  message: "Must be a valid store bank account",
                },
              })}
            />
          </label>
          {errors.storeBankAccount?.message && (
            <p>{errors.storeBankAccount.message}</p>
          )}
        </>
      )}
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
