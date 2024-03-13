import { useDispatch, useSelector } from "react-redux";
const ShoppingCart = () => {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();
  return (
    <>
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
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Sepetin boş</p>
      )}
    </>
  );
};
export default ShoppingCart;
