import React, { useState } from 'react'
import Blog from './component/Blog'
import AllBlog from './component/allBlog'

const App = () => {
  const [realtime,setRealtime] =useState (false)
  const makerealtime = ()=>{
    setRealtime(!realtime)
  }
  return (
    <div className='p-7 flex justify-around'>
        <Blog realtime={setRealtime}/>
        <AllBlog observerState={realtime}/>
    </div>
  )
}

export default App