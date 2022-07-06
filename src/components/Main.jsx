import '../index.css'
import Typed from 'react-typed';

export default function Main() {
  return (
    <div className='relative mx-auto justify-center text-center flex flex-col w-full h-screen'>
      <span className='text-white'>Enter:</span>
      <Typed className='text-white text-center md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'
        strings={['Reformatika Date().getFullYear()','Reformatika 2021' ]}
        startDelay={300}
        typeSpeed={60}
        backSpeed={20}
        backDelay={750}
        loop
        smartBackspace
        cursorChar='|'
      />
      <p className='text-white m-2 text-xs'>We kindly invite and we'll be waiting for you to come and join us at</p>
    </div>
  )
}