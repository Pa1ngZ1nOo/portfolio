import React from 'react'

export default function Skill() {
  return (
    <>
      <div className='text-center mb-5'>
        <h1 className='text-2xl text-orange-500 font-bold'>What I am great at</h1>
        <span>Here is my skillset and I hope these skills can help your work to be more productive.</span>
      </div>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 place-items-center no-scrollbar'>
        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="rounded-full w-40 p-3" src="/src/assets/java-icon.svg" alt="" />
          </div>
          <div className="p-3 bg-orange-500">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">Java SE/EE</h5>
          </div>
        </div>

        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="w-40 p-3" src="/src/assets/react.svg" alt="" />
          </div>
          <div className="p-3 bg-sky-300">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">React</h5>
          </div>
        </div>

        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="rounded-full w-32 p-3" src="/src/assets/flutter.svg" alt="" />
          </div>
          <div className="p-3 bg-blue-500">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">Flutter</h5>
          </div>
        </div>

        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="rounded-full w-40 p-3" src="/src/assets/spring.svg" alt="" />
          </div>
          <div className="p-3 bg-green-500">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">Spring</h5>
          </div>
        </div>

        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="rounded-full w-40 p-3" src="/src/assets/csharp.svg" alt="" />
          </div>
          <div className="p-3 bg-purple-500">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">C Sharp</h5>
          </div>
        </div>

        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="rounded-full w-40 p-3" src="/src/assets/redhat.svg" alt="" />
          </div>
          <div className="p-3 bg-red-500">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">Red Hat</h5>
          </div>
        </div>

        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="rounded-full w-40 p-3" src="/src/assets/bootstrap-5-1.svg" alt="" />
          </div>
          <div className="p-3 bg-purple-500">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">Bootstrap</h5>
          </div>
        </div>

        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="w-40 p-3" src="/src/assets/db.svg" alt="" />
          </div>
          <div className="p-3 bg-teal-600">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">Database</h5>
          </div>
        </div>

        <div className="w-60 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-500">
          <div className='flex justify-center rounded-full'>
            <img className="rounded-full w-40 p-3" src="/src/assets/github.svg" alt="" />
          </div>
          <div className="p-3 bg-black">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-white">GitHub</h5>
          </div>
        </div>

      </div>

    </>
  )
}
