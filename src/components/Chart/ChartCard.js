import React from 'react'

function Chart({ children, title }) {
  return (
    <div className="min-w-0 p-4  rounded-lg shadow-xs dark:bg-gray-800"style={{backgroundColor:"var(--dash-nav) !important"}}>
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300"style={{color:"var(--li-color)"}}>{title}</p>
      {children}
    </div>
  )
}

export default Chart
