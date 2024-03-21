import { useLocation, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isTokenExist = localStorage.getItem("token");
  const location = useLocation();
  return isTokenExist ? (
    children
  ) : (
    <Redirect to={{ pathname: "/login", state: { referrer: location } }} />
  );
};
export default ProtectedRoute;
