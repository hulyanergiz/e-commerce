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
        {openForm && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-3/4 mx-auto absolute bg-[#fff]"
          >
            <div className="bg-[#fff] flex flex-col items-center py-4 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-lg">
              <h4 className="text-center">Yeni Adres Ekle</h4>
              <label htmlFor="addressTitle" className="w-[73%] text-start py-1">
                Adres Başlığı:
              </label>
              <input
                {...register("addressTitle")}
                id="addressTitle"
                className="w-[73%] py-2 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-md"
                placeholder="  Adresinize bir başlık giriniz"
              />
              {errors.addressTitle && (
                <span className="text-red-500">Bu alan gereklidir.</span>
              )}
              <div className="w-[73%] flex flex-row justify-between">
                <div className="flex flex-col">
                  <label htmlFor="name" className="w-[73%] text-start py-1">
                    Ad:
                  </label>
                  <input
                    {...register("name", { required: true })}
                    id="name"
                    className=" py-2 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-md"
                    placeholder="  Adınızı giriniz"
                  />
                  {errors.name && (
                    <span className="text-red-500">Bu alan gereklidir.</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="surname" className="w-[73%] text-start py-1">
                    Soyad:
                  </label>
                  <input
                    {...register("surname", { required: true })}
                    id="surname"
                    className="py-2 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-md"
                    placeholder="  Soyadınızı giriniz"
                  />
                  {errors.surname && (
                    <span className="text-red-500">Bu alan gereklidir.</span>
                  )}
                </div>
              </div>

              <label htmlFor="phone" className="w-[73%] text-start py-1">
                Cep telefonu:
              </label>
              <input
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                id="phone"
                className="w-[73%] py-2 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-md"
                placeholder="  Cep telefonunuzu giriniz (5xxxxxxxxx)"
              />
              {errors.phone && errors.phone.type === "required" && (
                <span className="text-red-500">Bu alan gereklidir.</span>
              )}
              {errors.phone && errors.phone.type === "pattern" && (
                <span className="text-red-500">
                  Geçerli bir telefon numarası giriniz.
                </span>
              )}
              <label
                htmlFor="addressDetails"
                className="w-[73%] text-start py-1"
              />
              <input
                type="text"
                {...register("addressDetails")}
                placeholder="Adres detaylarını yazınız"
                className="w-[73%] py-2 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-md"
              />
              <div className="flex flex-row w-1/3 justify-between py-3">
                <button
                  type="submit"
                  className={`bg-[${
                    isValid ? "#23A6F0" : "zinc-300"
                  }]  font-bold py-2 px-4 shadow-[-2px_-2px_2px_2px_rgba(0,0,0,0.1)] rounded-md`}
                  disabled={!isValid}
                >
                  Kaydet
                </button>
                <button
                  onClick={closeFormWithoutSubmitting}
                  className="bg-[#a9dbf9] text-white font-bold py-2 px-4 shadow-[-2px_-2px_2px_2px_rgba(0,0,0,0.1)] rounded-md"
                >
                  Vazgeç
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default Order;
