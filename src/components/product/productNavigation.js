import { NavLink } from "reactstrap";

const ProductNavigation = () => {
  return (
    <div className="w-full flex justify-center">
<<<<<<< HEAD
      <div className="w-[30%] flex justify-between text-[#737373] text-sm font-bold no-underline py-6">
=======
      <div className="w-[35%] flex justify-between text-[#737373] text-sm font-bold no-underline py-6">
>>>>>>> 6518c110d1c654843e7ed44fb360c3ab2ac8ef39
        <NavLink href="/">Description</NavLink>
        <NavLink href="/shop">Additional Information</NavLink>
        <NavLink href="#">
          Reviews <span className="text-[#23856D]">(0)</span>
        </NavLink>
      </div>
    </div>
  );
};
export default ProductNavigation;