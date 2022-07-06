import '../index.css'

export default function Maps() {
    return (
        <div className='w-full h-screen bg-white py-16 px-4'>
            <h1 className='text-center text-red-700'>Lokasi</h1>
            <div className='md:w-3/6 sm:w-4/6 mx-auto py-6 justify-center text-center flex flex-col'>
                <iframe
                height={300}
                style={{border:10}}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCZHQtxQ3ZWuddwuXLxWiXIv6gib1o72nk&q=UIN+Alauddin+Makassar">
                </iframe>
                
            <div className='flex flex-col items-center text-white py-3'>
                <button class="transition px-3 py-2 pad ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 duration-300 rounded-lg ...">
                <a href="https://g.page/uinmks?share" target={'_blank'} >Lokasi</a>
                </button>
                
            </div>
                    
            <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className=''>Jl. Sultan Alauddin No.63, Romangpolong, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan</span>
            </div>


            </div>
        </div>
    )
}