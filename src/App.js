import logo from './logo.svg';
import './App.css';
import './index.css'
import Main from './components/Main';
import Pementasan from './components/Pementasan';
import Maps from './components/Maps';
import Countdown from './components/Countdown';
import About from './components/About';

export default function App() {
  return (
    <div>
      <Main />
      <Pementasan />
      <Countdown />
      <Maps />
      <About />
    </div>
  );
}