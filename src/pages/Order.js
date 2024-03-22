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
      <div className="flex flex-row gap-x-4">
        <div className="w-[49%] bg-[#bde1f8] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
          <h4 className="py-[1rem]">Adres Bilgileri</h4>
        </div>
        <div className="w-[49%] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
          <h4 className="py-[1rem]">Ödeme Seçenekleri</h4>
        </div>
      </div>
      <div className="bg-[#f2f7f9] flex flex-col p-4  mt-[1rem] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
        <h3 className="py-[1rem]">Teslimat Adresi</h3>
        <button
          onClick={() => setOpenForm(!openForm)}
          className="bg-white w-1/2 flex flex-row justify-center items-center gap-x-3 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-lg"
        >
          <FontAwesomeIcon size="md" icon={faPlus} color="#23A6F0" />
          <p className="pt-[1rem]">Yeni Adres Ekle</p>
        </button>
  );
};
export default Order;
