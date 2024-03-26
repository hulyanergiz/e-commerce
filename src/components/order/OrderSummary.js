import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderSummary = () => {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const history = useHistory();
  const totalPrice = cart
    .reduce(
      (total, item) => (item.checked ? total + item.price * item.count : total),
      0
    )
    .toFixed(2);
  return (
    <div className="w-[30%]">
      {totalPrice >= 300 && (
        <div className="h-[400px] mx-auto pt-4 px-8 shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
          <h4>Sipariş özeti</h4>
          <hr />
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p>Sepet Toplamı: </p>
              <p>{totalPrice} TL</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Kargo ücreti: </p>
              <p>29.99 TL</p>
            </div>

            <div className="flex flex-row justify-between">
              <p>300 TL ve üzeri Kargo Bedava </p>
              <p className="text-[#23A6F0]">-29.99 TL</p>
            </div>
            <hr className="mt-0" />
            <div className="flex flex-row justify-between">
              <p>Toplam: </p>
              <p>{totalPrice} TL</p>
            </div>
          </div>
          <p className="border-2 rounded-md w-[65%] mx-auto mt-2 cursor-pointer">
            <FontAwesomeIcon size="lg" icon={faPlus} color="#23A6F0" />
            İndirim Kodu Gir
          </p>
          <button className="bg-[#23A6F0] text-white text-lg py-2 px-3 border-none rounded-md cursor-pointer">
            Sepeti Onayla{" "}
            <FontAwesomeIcon
              size="md"
              icon={faChevronRight}
              color="#fff"
              className="pl-2"
            />
          </button>
        </div>
      )}
      {totalPrice < 300 && (
        <div className="h-[350px] mx-auto pt-4 px-12 shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg">
          <h4>Sipariş özeti</h4>
          <hr />
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p>Ara Toplam: </p>
              <p>{totalPrice} TL</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Kargo ücreti: </p>
              <p>29.99 TL</p>
            </div>
            <hr className="mt-0" />
            <div className="flex flex-row justify-between">
              <p>Toplam: </p>
              <p className="text-[#23A6F0]font-bold">
                {(Number(totalPrice) + Number(29.99)).toFixed(2)} TL
              </p>
            </div>
          </div>
          {totalPrice > 29.99 && (
            <div>
              <p className="border-2 rounded-md w-[65%] mx-auto mt-2 cursor-pointer">
                <FontAwesomeIcon
                  size="lg"
                  icon={faPlus}
                  color="#23A6F0"
                  className="pr-2"
                />
                İndirim Kodu Gir
              </p>

              <button
                onClick={() => history.push("/order")}
                className="bg-[#23A6F0] text-white text-lg py-2 px-3 border-none rounded-md cursor-pointer"
              >
                Sepeti Onayla{" "}
                <FontAwesomeIcon
                  size="md"
                  icon={faChevronRight}
                  color="#fff"
                  className="pl-2"
                />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default OrderSummary;
