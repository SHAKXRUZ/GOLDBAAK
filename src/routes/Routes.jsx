import { Route } from "react-router-dom";
import Home from "./home/Home";
import More from "./more/More";

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/more">
        <More />
      </Route>
    </>
  );
};

export default Routes;
