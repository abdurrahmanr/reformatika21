import '../../index.css'
import './timer'
import Fade from 'react-reveal/Fade'
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Countdown () {
    AOS.init({
        duration: 750,
        delay: 300
    })
    return (
        <div className=' text-red-600 bg-neutral-900 w-full h-1/2 pt-12'>
            <Fade bottom>
                <h1 className='font-bold bg-clip-text text-red-700 text-center'>Hitung Mundur</h1>    
            </Fade>
            
            <div className='text-center md:mx-72 sm:mx-0 py-16'>
                <Fade big>
                    <ul className='flex flex-row gap-2 md:gap-5 justify-center items-center'>

                        <li className='relative group' data-aos="flip-up">
                            <div className='absolute -inset-1 bg-red-500 rounded-lg opacity-100 transition blur h-auto w-auto'></div>
                            <div className='relative bg-white rounded-lg shadow-lg w-20 h-24 md:h-44 md:w-32 flex flex-col items-center justify-center'>
                                <span className=' text-2xl md:text-3xl font-bold' id ='day'></span>
                                <p className=' drop-shadow-2xl'>Days</p>
                            </div>
                            
                        </li>
                        <li className='relative group' data-aos="flip-down">
                            <div className='absolute -inset-1 bg-red-500 rounded-lg opacity-100 transition blur h-auto w-auto'></div>
                            <div className='relative bg-white rounded-lg shadow-lg w-20 h-24 md:h-44 md:w-32 flex flex-col items-center justify-center'> 
                                <span className='text-2xl md:text-3xl font-bold' id ='hour'></span>
                                <p>Hours</p> 
                            </div>
                        </li>
                        <li className='relative group' data-aos="flip-up">
                            <div className='absolute -inset-1 bg-red-500 rounded-lg opacity-100 transition blur h-auto w-auto'></div>
                            <div className='relative bg-white rounded-lg shadow-lg w-20 h-24 md:w-32 md:h-44 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold md:text-3xl' id ='minute'></span>
                                <p>Minutes</p>
                            </div>
                            
                        </li>
                        <li className='relative group' data-aos="flip-down">
                            <div className='absolute -inset-1 bg-red-500 rounded-lg opacity-100 transition blur h-auto w-auto'></div>
                            <div className='relative bg-white rounded-lg shadow-lg w-20 h-24 md:w-32 md:h-44 flex flex-col items-center justify-center'>
                                <span className='text-2xl md:text-3xl font-bold' id='second'></span>
                                <p>Seconds</p>
                            </div>
                            
                        </li>
                    </ul> 
                </Fade>
                
            </div>
            

        </div>
    )
}