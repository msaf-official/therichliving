import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel/Carousel'
import AgainHeader from './components/AgainHader/AgainHeader'
import Welcome from './components/Welcome/Welcome'
import Planes from './components/Planes/Planes'
import Products from './components/Products/Products'
function App() {
  return (
    <div className="App">
     <AgainHeader/>
    <Carousel/>
    <Welcome/>
    <Planes/>
    <Products/>
    </div>
  );
}

export default App;
