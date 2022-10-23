import '../../index.css'
import a1 from '../../assets/1.jpg'
import a2 from '../../assets/2.jpg'
import a3 from '../../assets/3.jpg'
import a4 from '../../assets/4.jpg'
import a5 from '../../assets/5.JPG'
import a6 from '../../assets/6.JPG'
import a7 from '../../assets/7.jpg'
import a8 from '../../assets/8.jpg'
import a9 from '../../assets/9.jpg'
import Fade from 'react-reveal/Fade'


export default function About() {
    return (
        
        <div className='bg-neutral-900 text-center h-fit'>            
            <section class="overflow-hidden text-red-700">
            <div class="container px-5 pb-12 mx-auto lg:pt-16 lg:px-32">
                <div className=' p-10 '>
                    <Fade bottom>
                    <h1>Tentang Kami</h1>
                    </Fade>
                </div>
                
                <div class="flex flex-wrap w-full -m-1 md:-m-2 justify-center ">

                   <div class="flex flex-wrap w-72 md:w-1/2 ">
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg overflow-hidden"
                        src={a1} />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg"
                        src={a2} />
                    </div>
                    <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg"
                        src={a3} />
                    </div>
                </div>
                <div class="flex flex-wrap w-72">
                    <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg"
                        src={a4} />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg"
                        src={a5} />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg"
                        src={a6} />
                    </div>
                </div>  
                <div class="flex flex-wrap w-3/4">
                    <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg"
                        src={a7} />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg"
                        src={a8} />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block hover:-translate-y-1 hover:scale-105 duration-300 object-cover object-center w-full h-full rounded-lg"
                        src={a9} />
                    </div>
                </div>  
                </div>
                </div>

            </section>   
        </div>
        
    )
}