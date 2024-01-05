import "./App.css";
import Header from "./layouts/Header";
import PageContent from "./layouts/PageContent";
import Footer from "./layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AxiosInstance, renewAxiosInstance } from "./api/api";
import { setUserSuccess } from "./store/actions/userActions";
import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useHistory } from "react-router-dom";
import { setCategories } from "./store/actions/globalActions";
import { setProductList } from "./store/actions/productActions";

function App() {
  const { user } = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [token, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    if (token) {
      AxiosInstance.get("/verify")
        .then((res) => {
          console.log("verify", res);
          dispatch(setUserSuccess(res.data));
        })
        .catch((err) => {
          console.error("verify", err);
          localStorage.removeItem("token");
          renewAxiosInstance();
        });
    } else {
      history.push("/login");
    }
    dispatch(setCategories());
    dispatch(setProductList());
  }, []);

  return (
    <div className="App">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
