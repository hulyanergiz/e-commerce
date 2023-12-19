import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";

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
      </Switch>
    </div>
  );
};
export default PageContent;
