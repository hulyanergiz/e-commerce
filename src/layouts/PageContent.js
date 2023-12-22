import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};
export default PageContent;
