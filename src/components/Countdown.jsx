import '../index.css'

export default function Countdown () {
    return (
        <div className='text-red-700 bg-white w-full h-1/2 '>
            <h1 className='text-center'>Countdown</h1>
            
            <div className='items-center text-center mx-72 py-6'>
                <ul className='grid grid-cols-4'>
                    <li className='rounded-lg shadow-xl h-48 '>Day</li>
                    <li className='rounded-lg shadow-xl h-48 '>Hour</li>
                    <li className='rounded-lg shadow-xl h-48 '>Minute</li>
                    <li className='rounded-lg shadow-xl h-48 '>Second</li>
                </ul>
            </div>
            

        </div>
    )
}