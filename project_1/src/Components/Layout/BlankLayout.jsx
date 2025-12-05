import React from 'react'
import { Outlet } from 'react-router-dom'

function BlankLayout() {
  return (
    <div className='dark:bg-(--blackBg)'>
        <Outlet/>
    </div>
  )
}

export default BlankLayout