import "./App.css";
import Header from "./layouts/Header";
import PageContent from "./layouts/PageContent";
import Footer from "./layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AxiosInstance, renewAxiosInstance } from "./api/api";
import { setUserSuccess, tokenVerify } from "./store/actions/userActions";
import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useHistory } from "react-router-dom";
import { setCategories } from "./store/actions/globalActions";
import { setProductList } from "./store/actions/productActions";

function App() {
  const { user } = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
  //const [token, setToken] = useLocalStorage("token", "");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      AxiosInstance.get("/verify", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          console.log("token", token);
          console.log("verify", res.data);
          dispatch(setUserSuccess(res.data));
          dispatch(tokenVerify(res.data.token));
        })
        .catch((err) => {
          console.error("verify", err);
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          renewAxiosInstance();
        });
    }
    dispatch(setCategories());
    dispatch(setProductList());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
