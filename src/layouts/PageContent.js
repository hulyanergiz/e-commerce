import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";

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
      </Switch>
    </div>
  );
};
export default PageContent;
