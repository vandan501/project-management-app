import React from 'react'

function ProjectSideBar() {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-200 rounded-r-xl md:w-72'>
    <h2 className='mb-10 font-bold uppercase md:text-xl text-stone-200'>+ Your Projects</h2>

    <div>
    

    <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700  text-stone-200 hover:bg-stone-600 hover:text-stone-100'>Add Project</button>
    </div>
    </aside>
  )
}

export default ProjectSideBar