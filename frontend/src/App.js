import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Carousel from './components/carousel/Carousel'
import AgainHeader from './components/AgainHader/AgainHeader'
function App() {
  return (
    <div className="App">
    {/* <Header/> */}
    <AgainHeader/>
    <Carousel/>
    </div>
  );
}

export default App;
