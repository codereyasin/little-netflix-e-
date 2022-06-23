import { AiOutlinePlayCircle } from 'react-icons/ai';

function Hero() {
  return (
    <div className="relative px-5">
        <img className="rounded-lg w-[9000px] max-h-[370px] object-cover" src="https://cdn.mos.cms.futurecdn.net/NJXQ8h3mUd9mhsh2m8xpba.jpg" loading="lazy" alt="" />
        <div className="absolute md:left-12 top-9 left-10">
        <h1 className="md:text-4xl text-3xl  font-bold text-white">Doctor Strange!</h1>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center mt-5  shadow "><AiOutlinePlayCircle size={23}/><span className='ml-3'>Watch Now</span></button>
        </div>
    </div>
  )
}

export default Hero