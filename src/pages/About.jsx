import React from 'react'
import { Link } from 'react-router-dom'
// import CV from '../assets/CV.pdf'

export default function About() {
  return (
    <div>
      <hr></hr>
      <div className='-mt-6 w-12 h-12 bg-gray-200 grid place-items-center rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      </div>
      <h1 className='mt-5 text-center text-2xl font-bold text-orange-500'>About Me</h1>
      <div className='mt-5 grid place-items-center'>
        <img src="/src/assets/AboutMe.jpg" className='w-20 h-20 rounded-full pointer-events-none' alt="" />
      </div>
      <p className='mt-5 text-center'> I graduated from Dagon University which is located in Yangon, with the science of water (B.Sc Hons.Hydrology). I have experiences in Data Analysis, Technical Report Writing, Model Development, Android Application Development, Window Application Development, Web Application Development and Enhancing Existing System. Each experience has been stepping stone in my growth as a software engineer.</p>
      <p className='mt-5 text-center'>I specialize in Web Development and, over 2 & half year experiences. Currently, I work as a software engineer/ IT Consultant in Maintenance and Operation Team under ACE Data Systems co., ltd. I am responsible for developing new features, updating features, algorithm and database queries, debugging, problem-solving, publishing to Testing Server and tracking shell scripts.  </p>
      <p className='mt-5 text-center'>I enjoy collaboratig with teams, sharing knowledge and embracing new Challenges that push me to grow as a software engineer.</p>
      <div className='mt-10 flex justify-center items-center'>
      <button className=" flex justify-center items-center bg-orange-500 rounded-full px-2 py-1 text-white shadow-lg hover:text-orange-500 hover:font-bold hover:bg-white hover:border hover:border-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:mr-1 md:w-4 md:h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        {/* href={CV} */}
        <a className="hidden md:block" download='CV'>Download CV</a>
      </button>
      </div>
      <hr className='mt-20'></hr>
      <div className='grid place-items-end'>
      <div className='-mt-6 w-12 h-12 bg-gray-200 flex justify-center items-center rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      </div>
      </div>
    </div>
  )
}
