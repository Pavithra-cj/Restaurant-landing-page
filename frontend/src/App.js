import '../src/Assets/CSS/style.css'
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    </div>
  );
}

export default App;
