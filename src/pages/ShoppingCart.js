import { useDispatch, useSelector } from "react-redux";
import {
  checkItem,
  decreaseItemCount,
  increaseItemCount,
  removeFromCart,
} from "../store/actions/shoppingCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import OrderSummary from "../components/order/OrderSummary";

const ShoppingCart = () => {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const totalItemCount = cart.reduce((total, item) => total + item.count, 0);

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  let remainingMinutes = 0;

  if (currentHour < 17) {
    remainingMinutes = (17 - currentHour - 1) * 60 + (60 - currentMinutes);
  } else {
    remainingMinutes = 24 * 60 - (currentHour * 60 + currentMinutes);
  }

  let deliveryMessage = "";
  if (remainingMinutes > 0) {
    if (remainingMinutes <= 60) {
      deliveryMessage = `${remainingMinutes} dakika içinde sipariş verirsenyarın kargoda!`;
    } else {
      const remainingHours = Math.floor(remainingMinutes / 60);
      const remainingMins = remainingMinutes % 60;
      deliveryMessage = `${remainingHours} saat ${remainingMins} dakika içinde sipariş verirsen yarın kargoda!`;
    }
  }

  const totalPrice = cart
    .reduce(
      (total, item) => (item.checked ? total + item.price * item.count : total),
      0
    )
    .toFixed(2);

  const handleCheckboxChange = (productId) => {
    dispatch(checkItem(productId));
  };

  return (
    <div className="flex flex-row mt-6">
      <div className="w-[50%] flex flex-col mx-auto">
        <h3> SEPETİM - {totalItemCount} ürün</h3>
        <hr />
        {cart.length > 0 ? (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <p className="text-[#737373]">
                Sepetindeki ürünleri Bireysel veya Kurumsal Fatura Seçerek
                alabilirsin.
              </p>
              {totalPrice < 300 && (
                <p className="text-[#a9dbf9] font-bold">
                  Sepete en az {(300 - totalPrice).toFixed(2)} TL'lik ürün
                  eklemeniz durumunda kargo bedava!
                </p>
              )}
              {totalPrice >= 300 && (
                <p className="text-[#a9dbf9] font-bold">Kargo Bedava</p>
              )}
            </div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="shadow-[-5px_-5px_5px_5px_rgba(0,0,0,0.1)] rounded-lg flex flex-col"
              >
                <div className="flex flex-row px-5 py-3 justify-around items-center">
                  <input
                    size="lg"
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id)}
                  ></input>
                  <img
                    src={item.images[0].url}
                    className="w-1/5"
                    alt="product"
                  />
                  <div className="w-3/5 flex flex-col justify-center">
                    <p className="text-start font-bold">{item.name}</p>
                    <hr className="mt-0" />
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row gap-x-2">
                        <button
                          onClick={() => {
                            if (item.count === 1) {
                              Swal.fire({
                                text: "Sepetinden bu ürünü tamamen silmek üzeresin. Silmek istediğine emin misin?",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText: "Sil",
                                confirmButtonColor: "#23A6F0",
                                cancelButtonText: "İptal",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  dispatch(decreaseItemCount(item.id));
                                }
                              });
                            } else {
                              dispatch(decreaseItemCount(item.id));
                            }
                          }}
                          className="bg-[#a9dbf9] text-white text-lg font-bold rounded-md px-[13px] my-2"
                        >
                          -
                        </button>
                        <p className="text-[#737373] pt-3 w-16 text-center">
                          Adet:{item.count}
                        </p>
                        <button
                          onClick={() => dispatch(increaseItemCount(item.id))}
                          className="bg-[#a9dbf9] text-white text-lg font-bold rounded-md px-[13px] my-2"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex flex-col justify-between">
                        <p className="text-[#737373] text-sm">
                          (Adet: {item.price.toFixed(2)} TL)
                        </p>
                        <p className="text-[#23A6F0] font-bold self-end mb-0">
                          {(item.price * item.count).toFixed(2)} TL
                        </p>
                      </div>
                    </div>
                    <p className="text-[#737373] text-sm text-start mb-0 mt-3">
                      {deliveryMessage}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    size="xl"
                    icon={faTrash}
                    className="text-[#23A6F0] cursor-pointer"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Sepetim boş</p>
        )}
      </div>
      <OrderSummary />
    </div>
  );
};
export default ShoppingCart;
