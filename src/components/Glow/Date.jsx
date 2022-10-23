import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../../index.css'
import Fade from 'react-reveal/Fade';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Date () {
    
    AOS.init({
        duration: 750,
        delay: 300
      })

    return (
        <div id='next' className='bg-neutral-900 h-1/2 w-full justify-center items-center py-12 flex font-bold text-red-700  md:space-y-0 md:space-x-36 flex-wrap'>
            <div className='flex flex-col pb-12' data-aos="fade-right">
                <div className='text-center items-center flex flex-col mb-10'>
                    <FontAwesomeIcon className='py-4' icon={faCalendar} size="2xl" />
                    <span className='ml-4 text-center text-sm md:text-base'>Sabtu, 30 Juli 2022<br />19.00 WITA</span>
                </div>
                <div className='text-center items-center flex flex-col'>
                    <FontAwesomeIcon className='py-4' icon={faLocationDot} size="2xl" />
                    <span className='ml-4 text-center text-sm md:text-base'>Jl. HM. Yasin Limpo No. 42 <br />Pelataran Pesantren Guppi Samata</span>
                </div>
                </div>

                <div className='flex flex-col py-6' data-aos="fade-left">
                <Fade big>
                <div className='mx-auto py-6 justify-center text-center flex flex-col'>
                    <iframe
                    height={300}
                    style={{border:10}}
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7946.707813377732!2d119.50120852152241!3d-5.206953083957134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3fbfc333f09%3A0xbeb1dd150724ae78!2sPesantren%20GUPPI%20Samata!5e0!3m2!1sen!2sid!4v1658912651263!5m2!1sen!2sid">
                    </iframe>

                <div className='flex flex-col items-center text-white py-3'>
                    <button class="transition px-3 py-2 pad ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 duration-300 rounded-lg ...">
                    <a href="https://goo.gl/maps/5ZYNN7yNKMaEbYuz9" target={'_blank'} >Lokasi</a>
                    </button>
                    
                </div>

                </div>
                </Fade>
                </div>
            </div>
    )
}