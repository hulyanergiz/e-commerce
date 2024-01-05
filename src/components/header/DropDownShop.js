import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";

const DropDownShop = () => {
  const categories = useSelector((store) => store.global.categories);
  console.log("categorşes", categories);
  const sortedAllCategories = categories.sort((a, b) => a.gender - b.gender);
  console.log("SORTED ALL", sortedAllCategories);
  let categoriesWomen = [];
  let categoriesMen = [];
  let firstManCategoryIndex = 0;
  for (let i = 0; i < sortedAllCategories.length; i++) {
    if (sortedAllCategories[i].gender === "e") {
      firstManCategoryIndex = i;
      break;
    }
  }
  categoriesWomen = sortedAllCategories.slice(0, firstManCategoryIndex);
  categoriesMen = sortedAllCategories.slice(
    firstManCategoryIndex,
    categories.length
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="flex p-5">
      <Dropdown
        isOpen={dropdownOpen}
        toggle={() => setDropdownOpen(!dropdownOpen)}
      >
        <DropdownToggle
          caret
          style={{ backgroundColor: "white", color: "#737373", border: "none" }}
        >
          Shop
        </DropdownToggle>
        <DropdownMenu>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <DropdownItem header>KADIN</DropdownItem>
              {categoriesWomen.map((category, i) => {
                return (
                  <NavLink
                    key={i}
                    href={`/shopping/:${
                      category.gender === "k" ? "kadin" : "erkek"
                    }/:${category.code.slice(2)}`}
                    className="h-full"
                  >
                    <DropdownItem>{category.title}</DropdownItem>
                  </NavLink>
                );
              })}
            </div>
            <div className="flex flex-col">
              <DropdownItem header>ERKEK</DropdownItem>
              {categoriesMen.map((category, i) => {
                return (
                  <NavLink
                    key={i}
                    href={`/shopping/:${
                      category.gender === "k" ? "kadin" : "erkek"
                    }/:${category.code.slice(2)}`}
                    className="h-full"
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
