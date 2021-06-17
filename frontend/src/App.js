import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Carousel from "./components/carousel/Carousel";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Planes from "./components/Planes/Planes";
import Products from "./components/Products/Products";
import RegisterForm from "./components/Register/RegisterForm";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Carousel />
            <Welcome />
            <Planes />
            {/* <Products /> */}
          </Route>
          <Route exact path="/register">
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
