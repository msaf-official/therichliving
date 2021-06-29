import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Planes from "./components/Planes/Planes";
import Products from "./components/Products/Products";
import RegisterForm from "./components/Register/RegisterForm";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import React, {useState} from "react"
import DistributorSidebar from "./components/DistributorDashboard/DistributorSidebar/DistributorSidebar";
import Dashboard from "./components/DistributorDashboard/Dashboard";
function App() {
  // const isAuthenticated = localStorage.getItem("access_token");
  const[token,settoken]=useState(localStorage.getItem("access_token"))
  // if(!token){
  //  return <Login setToken={settoken}/>
  // }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Carousel />
            <Welcome />
            <Planes />
            <Footer />
            {/* <Products /> */}
          </Route>
          <Route exact path="/register">
            <RegisterForm />
          </Route>

          {/* {isAuthenticated ? (
            <>
              <DistributorSidebar dashboard={true} />
            </>
          ) : (
            <>
              <Redirect to={{ pathname: "/" }} />
            </>
          )} */}
          
          <Route  path="/login">
          { !token ?(
        <Login setToken={settoken}/>):(<>
         <Redirect to={{ pathname: "/distributor/dashboard" }} />
        </>)
         }
          </Route>
         

         
            {token ?( 
            <>
            <Route path="/distributor/dashboard">
              <DistributorSidebar dashboard={true} />
            </Route>
            <Route path="/distributor/profile">
              <DistributorSidebar profile={true} />
            </Route>
            </>
            ):
            (<>
              <Redirect to={{ pathname: "/login" }} />
             </>)
            }
            
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
