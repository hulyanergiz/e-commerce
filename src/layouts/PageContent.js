import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

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
      </Switch>
    </div>
  );
};
export default PageContent;
