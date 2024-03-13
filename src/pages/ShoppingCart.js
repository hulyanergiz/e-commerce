import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
} from "../store/actions/shoppingCartActions";
const ShoppingCart = () => {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();
  const totalItemCount = cart.reduce((total, item) => total + item.count, 0);
  return (
    <div className="w-[73%] flex flex-col mx-auto">
      <h2> SEPETİM - {totalItemCount} ürün</h2>
      {cart.length > 0 ? (
        <div className="flex flex-col">
          <p className="text-[#737373]">
            Sepetindeki ürünleri Bireysel veya Kurumsal Fatura Seçerek
            alabilirsin.
          </p>
          {cart.map((item, index) => (
            <div key={index} className="shadow-sm">
              <div className="flex flex-row ">
                <img src={item.images[0].url} className="w-24 py-1 pl-2" />
                <div className="flex flex-col justify-between py-[6px]">
                  <p className="text-[#737373]">{item.name}</p>
                  <p>
                    <strong>39 dakika</strong> içinde sipariş verirsen{" "}
                    <strong>en geç yarın</strong> kargoda!
                  </p>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <button
                    onClick={() => dispatch(decreaseItemCount(item.id))}
                    className="bg-[#23A6F0] text-white text-lg font-bold rounded-md px-3 py-2"
                  >
                    -
                  </button>
                  <p className="text-[#737373] pt-3 w-16 text-center">
                    Adet:{item.count}
                  </p>
                  <button
                    onClick={() => dispatch(increaseItemCount(item.id))}
                    className="bg-[#23A6F0] text-white text-lg font-bold rounded-md px-3 py-2"
                  >
                    +
                  </button>
                </div>
                  <p className="text-[#737373] text-sm">
                    (Adet: {item.price.toFixed(2)} TL)
                  </p>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Sepetin boş</p>
      )}
    </div>
  );
};
export default ShoppingCart;
