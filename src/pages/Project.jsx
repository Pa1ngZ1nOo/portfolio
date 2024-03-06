import React from 'react';
import Slider from "react-slick";

export default function Project() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className='text-center text-2xl font-bold text-orange-500'>My Projects</div>
      <span className='mb-5 flex justify-center text-center'>Selection of Projects that highlight my capabilities and creativity.</span>
      <hr></hr>
      <div className="mt-20 slider-container text-center">
        <Slider {...settings}>
          <div className='p-5 md:p-0'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-32 md:rounded-none md:rounded-s-lg pointer-events-none" src="/src/assets/RDM.jpg
              " alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">River Discharge Measurement</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Android(2016) - Calculate River Discharge based on input parameters</p>
              </div>
            </div>
          </div>
          <div className='p-5 md:p-0'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-32 md:rounded-none md:rounded-s-lg pointer-events-none" src="/src/assets/GIS.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GIS Mapping App</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Android(2017) - Guides for how to draw a map using GIS</p>
              </div>
            </div>
          </div>          
          <div className='p-5 md:p-0'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-32 md:rounded-none md:rounded-s-lg pointer-events-none" src="/src/assets/Hotel.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hotel Management System</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Java Fx Application(2023) - Ongoing Project (Floor Plan, Room, User Info, Customer Info)</p>
              </div>
            </div>
          </div>
          <div className='p-5 md:p-0'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-32 md:rounded-none md:rounded-s-lg pointer-events-none" src="/src/assets/Portfolio.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio Website</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React(2024) - highlight skills, projects and experiences</p>
              </div>
            </div>
          </div>
          <div className='p-5 md:p-0'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-32 md:rounded-none md:rounded-s-lg pointer-events-none" src="/src/assets/NA.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Library Management Application</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React+Firebase(2024) Ongoing Project - can store books for each user</p>
              </div>
            </div>
          </div>
          <div className='p-5 md:p-0'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-32 md:rounded-none md:rounded-s-lg pointer-events-none" src="/src/assets/NA.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Student Management Application</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Java Fx Application(2021) - registration, update info, delete student, accessing info</p>
              </div>
            </div>
          </div>
          <div className='p-5 md:p-0'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-32 md:rounded-none md:rounded-s-lg pointer-events-none" src="/src/assets/NA.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GIS software Installation Guide</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">C#(2017) - How to install and set up files</p>
              </div>
            </div>
          </div>
          {/* <div className='p-5 md:p-0'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-32 md:rounded-none md:rounded-s-lg pointer-events-none" src="/src/assets/GIS.jpg" alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Testing 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021</p>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
      <hr className='mt-20'></hr>
      <p className='mt-5 text-center'>I take great pleasure in showcasing my projects, which evolve from initial idea concepts to fully realized executions. Some projects stem from collaborative efforts within a group, while others are the result of my individual endeavors.</p>
    </div>
  );
}
