import logo from './logo.svg';
import './App.css';
import './index.css'

import MainG from './components/Glow/Main';
import CountdownG from './components/Glow/Countdown';
import AboutG from './components/Glow/About';
import DateG from './components/Glow/Date';
import PentasG from './components/Glow/PentasG'
import SimpleReactLightbox from 'simple-react-lightbox'
import Link from './components/Glow/Link';

export default function App() {
  return (
    <div>
      <MainG />
      <DateG />
      <Link />
      <PentasG />
      <CountdownG />
      <AboutG />
    </div>
  );
}