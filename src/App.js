import "./App.css";
import Header from "./layouts/Header";
import PageContent from "./layouts/PageContent";
import Footer from "./layouts/Footer";
import { useDispatch } from "react-redux";
import { AxiosInstance, renewAxiosInstance } from "./api/api";
import { setUser } from "./store/actions/userActions";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const tokenExist = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (tokenExist) {
      AxiosInstance.get("/verify")
        .then((res) => {
          console.log("verify", res);
          const userData = res.data;
          dispatch(setUser(userData));
          renewAxiosInstance();
          history.push("/");
        })
        .catch((err) => {
          console.error("verify", err);
          localStorage.removeItem("token");
          renewAxiosInstance();
        });
    }
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
