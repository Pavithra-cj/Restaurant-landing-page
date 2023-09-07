import '../src/Assets/CSS/style.css'
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Footer/>
    </div>
  );
}

export default App;
