import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";

const DropDownShop = () => {
  const categories = useSelector((store) => store.global.categories);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory();
  console.log("categories", categories);
  const categoriesWomen = categories.filter(
    (category) => category.gender === "k"
  );
  const categoriesMen = categories.filter(
    (category) => category.gender === "e"
  );

  return (
    <div className="flex" onClick={() => history.push("/shop")}>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={() => setDropdownOpen(!dropdownOpen)}
      >
        <DropdownToggle
          caret
          style={{
            backgroundColor: "white",
            color: "#737373",
            fontWeight: "bold",
            fontSize: "14px",
            border: "none",
          }}
        >
          Shop
        </DropdownToggle>
        <DropdownMenu>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <DropdownItem header className="ml-2">
                KADIN
              </DropdownItem>
              {categoriesWomen.map((category, i) => {
                return (
                  <NavLink
                    key={i}
                    href={`/shopping/:${
                      category.gender === "k" ? "kadin" : "erkek"
                    }/:${category.code.slice(2)}`}
                    className="p-2"
                  >
                    <DropdownItem>{category.title}</DropdownItem>
                  </NavLink>
                );
              })}
            </div>
            <div className="flex flex-col">
              <DropdownItem header className="ml-2">
                ERKEK
              </DropdownItem>
              {categoriesMen.map((category, i) => {
                return (
                  <NavLink
                    key={i}
                    href={`/shopping/:${
                      category.gender === "k" ? "kadin" : "erkek"
                    }/:${category.code.slice(2)}`}
                    className="p-2"
                  >
                    <DropdownItem>{category.title}</DropdownItem>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export default DropDownShop;
