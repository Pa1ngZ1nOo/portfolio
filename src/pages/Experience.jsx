import React from 'react'

export default function Experience() {
  return (
    <>
    <h1 className='text-center text-2xl text-orange-500 font-bold mb-5'>Experience</h1>
    <hr />
      <div className='mt-10'>
        <div className='lg:flex lg:justify-around lg:items-center lg:space-x-10'>
          <div className='md:grid md:grid-cols-2 md:gap-4 md:place-items-center flex gap-4 space-y-2'>
            <img src="/src/assets/Present.jpg" className='w-32 h-34 md:w-48 md:h-38 rounded-lg pointer-events-none' alt="" />
            <img src="/src/assets/Hydro.jpg" className='w-32 h-34 md:w-48 md:h-38 rounded-lg pointer-events-none' alt="" />
          </div>
          <div className='mt-5 md:grid md:place-items-center'>
            <div className='border border-double border-4 p-5'>
              <h1 className='font-bold text-blue-500'>Department Of Meteorology and Hydrology</h1>
              <h3 className='italic text-sm'>Junior Observer/Presenter (2015 - 2017)</h3>
              <ul className='list-disc ml-5 text-sm'>
                <li>Measurement of River Discharge and Development of Android App</li>
                <li>GIS Mapping and Technical Report Writing</li>
                <li>Participating in Team work and Developing Model</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 md:mt-20'>
        <div className='lg:flex lg:justify-around lg:items-center lg:space-x-10 md:grid md:place-items-center'>
          <div className='border border-double border-4 p-5'>
            <h1 className='font-bold text-blue-500'>Total Business Solution Co., Ltd</h1>
            <h3 className='italic text-sm'>Hydrologist/GIS Specialist (2017 - 2019)</h3>
            <ul className='list-disc ml-5 text-sm'>
              <li>GIS Mapping</li>
              <li>Participating in co-operation with the team</li>
              <li>Development of Survey Application online/offline</li>
            </ul>
          </div>
          <div className='mt-5 md:grid md:grid-cols-2 md:place-items-center flex gap-4 space-y-2'>
            <img src="/src/assets/Challenge.jpg" className='w-32 h-34 md:w-48 md:h-38 rounded-lg pointer-events-none' alt="" />
            <img src="/src/assets/Landuse.jpg" className='w-32 h-34 md:w-48 md:h-38 rounded-lg pointer-events-none' alt="" />
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='lg:flex lg:justify-around lg:items-center lg:space-x-10'>
          <div className='md:grid md:grid-cols-2 md:gap-4 md:place-items-center flex gap-4 space-y-2'>
            <img src="/src/assets/Coding.jpg" className='w-32 h-34 md:w-48 md:h-38 rounded-lg pointer-events-none' alt="" />
            <img src="/src/assets/Prob.jpg" className='w-32 h-34 md:w-48 md:h-38 rounded-lg pointer-events-none' alt="" />
          </div>
          <div className='mt-5 md:grid md:place-items-center'>
            <div className='border border-double border-4 p-5'>
              <h1 className='font-bold text-blue-500'>ACE Data Systems Co., Ltd</h1>
              <h3 className='italic text-sm'>Software Engineer/IT Consultant (2021 - Present)</h3>
              <ul className='list-disc ml-5 text-sm'>
                <li>Developing new features and Updating</li>
                <li>Algorithm and Problem Solving</li>
                <li>Analysis Impact and Testing</li>
                <li>Publishing source codes to Testing Server</li>
                <li>Developing Database Functions and Queries</li>
                <li>Tracking ShellScripts in Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
