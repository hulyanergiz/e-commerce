import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavLink,
} from "reactstrap";
import {
  decreaseItemCount,
  increaseItemCount,
} from "../../store/actions/shoppingCartActions";

const ShoppingCartDropDown = () => {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const totalItemCount = cart.reduce((total, item) => total + item.count, 0);
  return (
    <div>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={() => setDropdownOpen(!dropdownOpen)}
      >
        <DropdownToggle
          style={{
            backgroundColor: "white",
            color: "#23A6F0",
            fontWeight: "bold",
            fontSize: "14px",
            border: "none",
          }}
        >
          <div className="flex flex-row mt-3">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-[#23A6F0] mt-1"
            />
            <p className="pl-2">{totalItemCount}</p>
          </div>
        </DropdownToggle>
        <DropdownMenu className="w-[500px]">
          {dropdownOpen && (
            <>
              <DropdownItem header className="ml-2 w-full">
                SEPETİM - {totalItemCount} ürün
              </DropdownItem>

              <div className="flex flex-col justify-between px-4 gap-y-1">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-x-2 border-solid border-2 rounded-sm border-sky-200"
                  >
                    <img src={item.images[0].url} className="w-24 py-1 pl-2" />
                    <div className="flex flex-col justify-between py-[6px]">
                      <p className="text-[#737373]">{item.name}</p>
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
                      <div className="flex flex-row gap-x-2 items-center w-full">
                        <p className="text-[#23A6F0] font-bold">
                          {(item.price * item.count).toFixed(2)} TL
                        </p>
                        <p className="text-[#737373] text-sm">
                          (Adet: {item.price.toFixed(2)} TL)
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row  justify-between px-4 py-1">
                <NavLink href="/cart">
                  <button className="bg-[#23A6F0] text-white text-xl rounded-md px-3 py-2">
                    Sepete Git
                  </button>
                </NavLink>
                <NavLink href="/order">
                  <button className="bg-[#23A6F0] text-white text-xl rounded-md px-3 py-2">
                    Siparişi Tamamla
                  </button>
                </NavLink>
              </div>
            </>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export default ShoppingCartDropDown;
