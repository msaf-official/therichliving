import Carousel from "./components/carousel/Carousel";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Planes from "./components/Planes/Planes";
import Products from "./components/Products/Products";
function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Welcome />
      <Planes />
      <Products />
    </>
  );
}

export default App;
