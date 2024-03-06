import { Link } from "react-router-dom"
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function App() {
  const [text] = useTypewriter({
    words: ['Software Engineer','Java Developer','IT Consultant'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000    
  });

  return (
    <>
      <div className="border-solid border-2 border-black rounded-full text-center font-bold p-5">
        <div className="text-lg md:text-xl">-- Hello! Welcome To My Portfolio Website --</div>
      </div>
      <div className="grid grid-cols-1 text-center md:grid-cols-2 md:text-left ">
        <div>
          <div className="mt-20 align-center">
            <div className="space-y-2 ">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Hi, I'm Paing Zin Oo.</h1>              
              <span className="font-bold text-lg md:text-xl text-indigo-500">{text}
              </span>
              <Cursor cursorColor="#CCCCFF" />
              <p className="text-sm md:text-lg text-gray-500 italic">with a great flair for renovation, innovation, turning ideas to reality and
                optimizing algorithms for enhancing performance and problem-solving.</p>
            </div>
            <div className="mt-10 flex justify-center md:justify-start">
              <Link to="tel:+959953853629" className="flex justify-center items-center bg-red-500 border border-b-2 rounded-full px-3 py-1 mr-2 text-white shadow-lg hover:text-red-500 hover:font-bold hover:bg-white hover:border-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:mr-2 md:w-4 md:h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="hidden md:block">Call Now</span>
              </Link>
              <Link to="/contact" className="flex justify-center items-center bg-orange-500 border border-b-2 rounded-full px-4 py-1 mr-2 text-white shadow-lg hover:text-orange-500 hover:font-bold hover:bg-white hover:border-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:mr-2 md:w-4 md:h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="hidden md:block">Email</span>
              </Link>
              <Link className="flex justify-center items-center bg-indigo-500 border border-b-2 rounded-full px-4 py-1 text-white shadow-lg hover:text-blue-500 hover:font-bold hover:bg-white hover:border-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:mr-2 md:w-4 md:h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
                <span className="hidden md:block">Hire Me</span>
              </Link>
            </div>
            <div className="flex w-30 h-30 space-x-10 mt-10 justify-center md:justify-start">
              <Link to='viber://contact?+959428197652=%2B0000000000000' target="_blank" className="w-12 h-12 bg-blue-500 rounded-full grid place-items-center shadow-lg hover:shadow-indigo-500 cursor-pointer">
                <img src="/src/assets/viber.svg" className="bg-indigo-500 rounded-full w-4 md:w-30" alt="" />
              </Link>
              <Link to='https://www.facebook.com/profile.php?id=100083296752005&mibextid=ZbWKwL' target="_blank" className="w-12 h-12 bg-blue-500 rounded-full grid place-items-center shadow-lg hover:shadow-indigo-500 cursor-pointer">
                <img src="/src/assets/facebook.png" className="bg-indigo-500 rounded-full w-4 md:w-30" alt="" />
              </Link>
              <Link to='https://www.linkedin.com/in/paing-zin-oo-38a412b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" className="w-12 h-12 bg-blue-500 rounded-full grid place-items-center shadow-lg hover:shadow-indigo-500 cursor-pointer">
                <img src="/src/assets/linkedin.png" className="bg-indigo-500 rounded-full w-4 md:w-30" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center md:items-center md:justify-end ">
          <img src="/src/assets/newProfile.jpg" className="w-80 rounded-full pointer-events-none" alt="" />
        </div>
      </div>
      <hr className="mt-20"></hr>
      <div className="text-xs text-center mt-10 md:text-sm">
        <p>-- <span className="bg-black text-white p-1 rounded-full">Do</span> what you <span className="bg-black text-white p-1 rounded-full">Love</span> or <span className="bg-black text-white p-1 rounded-full">Love</span> what you <span className="bg-black text-white p-1 rounded-full">Do</span> --</p>
      </div>
    </>
  )
}

export default App
