import '../../index.css'
import Typed from 'react-typed';
import Refor from '../../assets/bg1.mp4';
import './PentasG';
import logo from '../../assets/logo.png'
import MainG from './Main';
import CountdownG from './Countdown';
import AboutG from './About';
import DateG from './Date';
import PentasG from './PentasG'
import {useState} from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

export default function Main() {
  return (
    <div id='main' className='relative mx-auto justify-center text-center flex flex-col w-full h-screen bg-fixed'>
      
      <div>
        <video className='absolute top-0 left-0 w-full h-full object-cover' src={Refor} autoPlay loop muted></video>  
      </div>
      

      <div className='absolute flex flex-col justify-center items-center gap-4 top-0 w-full h-full'>
        
        <img src={logo} className=" h-80 w-80" alt="Logo refor" />
        <p className='text-white px-4 m-2 text-base'>Kami mengundang dan akan menunggu Anda di :</p>
        <Typed className='text-white text-center text-base font-bold'
          strings={['Reformatika 2021' ]}
          startDelay={2500}
          typeSpeed={25}
          cursorChar='|'
          />
          <a href="#next" class="transition px-3 py-2 pad ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 duration-300 rounded-lg text-white font-bold">Join Now!</a>
         </div>
    </div>
  )
}