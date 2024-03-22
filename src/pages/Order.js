import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
const Order = () => {
  const [openForm, setOpenForm] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      addressTitle: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      addressDetails: "",
    },
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const closeFormWithoutSubmitting = () => {
    setOpenForm(!openForm);
    reset();
  };
  const onSubmit = (address) => {
    dispatch(setAddress(address));
    setOpenForm(!openForm);
    reset();
  };

  return (
    <div className="flex flex-col relative  w-[73%] m-auto">
      <div className="flex flex-row gap-x-3">
        <div className="w-[46%] bg-[#a9dbf9] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
          <h3 className="pt-[1rem]">Adres Bilgileri</h3>
        </div>
        <div className="w-[46%] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
          <h3 className="pt-[1rem]">Ödeme Seçenekleri</h3>
        </div>
      </div>
      <div className="flex flex-col p-4 shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
        <h2 className="pt-[1rem]">Teslimat Adresi</h2>
        <button
          onClick={() => setOpenForm(!openForm)}
          className="w-1/2 flex flex-row justify-center items-center gap-x-3 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-lg"
        >
          <FontAwesomeIcon size="md" icon={faPlus} color="#23A6F0" />
          <p className="pt-[1rem]">Yeni Adres Ekle</p>
        </button>
  );
};
export default Order;
