import { Switch, Route } from "react-router-dom";
import Cart from "../pages/cart";
import Shop from "../pages/shop";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Shop />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
