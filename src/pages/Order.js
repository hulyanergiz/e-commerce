import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getCities,
  getDistrictsByCityCode,
  getNeighbourhoodsByCityCodeAndDistrict,
} from "turkey-neighbourhoods";
import {
  getAddresses,
  postAddress,
} from "../store/actions/shoppingCartActions";
import OrderSummary from "../components/order/OrderSummary";

const Order = () => {
  const [openForm, setOpenForm] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "onBlur",
  });

  const addresses = useSelector((store) => store.shoppingCart.address);
  const dispatch = useDispatch();
  const [cities, setCities] = useState(getCities());
  const [districts, setDistricts] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  const handleCityChange = (selectedCity) => {
    setValue("city", selectedCity);
    const selectedCityInfo = cities.find((city) => city.name === selectedCity);
    if (selectedCityInfo) {
      const selectedDistricts = getDistrictsByCityCode(selectedCityInfo.code);
      setDistricts(selectedDistricts);
      setNeighborhoods([]);
    }
  };

  const handleDistrictChange = (selectedDistrict) => {
    setValue("district", selectedDistrict);
    const selectedCityInfo = cities.find(
      (city) => city.name === getValues("city")
    );
    if (selectedCityInfo) {
      const selectedNeighborhoods = getNeighbourhoodsByCityCodeAndDistrict(
        selectedCityInfo.code,
        selectedDistrict
      );
      setNeighborhoods(selectedNeighborhoods);
    }
  };

  const closeFormWithoutSubmitting = () => {
    setOpenForm(!openForm);
    reset();
  };
  const onSubmit = async (address) => {
    dispatch(postAddress(address));
    reset();
    setOpenForm(!openForm);
  };
    dispatch(setAddress(address));
    setOpenForm(!openForm);
    reset();
  };

  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-col relative  w-[50%]">
        <div className="flex flex-row gap-x-4">
          <div className="w-[49%] bg-[#bde1f8] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
            <h4 className="py-[1rem]">Adres Bilgileri</h4>
          </div>
          <div className="w-[49%] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
            <h4 className="py-[1rem]">Ödeme Seçenekleri</h4>
          </div>
        </div>
        <div className="bg-[#f2f7f9] flex flex-col p-4  mt-[1rem] shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
                    <label htmlFor="title" className="w-[73%] text-start py-1">
                      Adres Başlığı:
                    </label>
                    <input
                      {...register("title")}
                      id="title"
                      className="w-[73%] py-2 shadow-[-3px_-3px_3px_3px_rgba(0,0,0,0.1)] rounded-md"
                      placeholder="  Adresinize bir başlık giriniz"
                    />
                    {errors.title && (
                      <span className="text-red-500">Bu alan gereklidir.</span>
                    )}
                      type="tel"
                      id="phone"
                      htmlFor="address"
                      type="text"
                      {...register("address")}
            </div>
          )}
        </div>
      </div>
      <OrderSummary buttonText="Siparişi Onayla" />
    </div>
  );
};
export default Order;
