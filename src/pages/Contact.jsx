import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  let [status, setStatus] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n0goxxx', 'template_lzo8fuv', form.current, {
        publicKey: 'WFZHXhugiDM44UOiT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset(); 
          setStatus(true);         
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 bg-gray-100 rounded-xl'>
      <div>
        <h1 className='font-bold'>Send A Request</h1>
        <span className=''>Please don't hesitate to inbox me.</span>
        <span> I appreciate your valuable message.</span>
        <form ref={form} onSubmit={sendEmail} className="mt-5 max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" name='user_email' className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input type="text" id="name" name='user_name' className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className='mb-5'>
            <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your comment</label>
            <textarea name='message' id='comment' cols='30' rows='5' className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required></textarea>
          </div>
          {/* focus:ring-4 focus:outline-none focus:ring-blue-300 */}
          {status && <span className='text-xs font-bold'>Your comment was sent successfully!.</span>}
          <button type="submit" className="float-right text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
      <div className='md:ml-5'>
        <iframe className='mt-10 md:mt-0 w-full aspect-video' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290634.0086520852!2d96.02104411815766!3d16.844100905051768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2z4YCb4YCU4YC64YCA4YCv4YCU4YC6!5e0!3m2!1smy!2smm!4v1709481719957!5m2!1smy!2smm" width="350" height='480' sallowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='mt-10 md:mt-5 md:ml-10'>
        <h1 className='text-lg  font-bold'>Get In Touch</h1>
        <p>Feel free to reach out to me from the contact below.</p>
        <div className='mt-5 flex'>
          <div className='flex items-center justify-center w-12 h-10 bg-blue-500 rounded-full shadow-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
          </div>
          <p className='ml-3 text-sm font-bold'>Dawbon Township, Yangon Division, Myanmar.</p>
        </div>
        <div className='mt-5 flex items-center text-center'>
          <div className='flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full shadow-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </div>
          <p className='ml-3 text-sm font-bold'>+959 953853629</p>
        </div>
        <div className='mt-5 flex items-center'>
          <div className='flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full shadow-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <p className='ml-3 text-sm font-bold'>pylay88@gmail.com</p>
        </div>
        <div className='mt-5 flex items-center'>
          <div className='flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full shadow-lg'>
            <img src="/src/assets/github.svg" className='w-6 h-6' alt="" />
          </div>
          <p className='ml-3 text-sm font-bold'>https://github.com/Pa1ngZ1nOo</p>          
        </div>
        <hr className='mt-10' />
        <span className='mt-10 flex justify-center italic font-bold'>-- Thanks for visiting -- </span>
      </div>
    </div>
  )
}
