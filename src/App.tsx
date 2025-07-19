import { useState } from 'react'

import './App.css'
import  ProjectDetail  from "./Component/ProjectDetail";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectDetail/>
    </>
  )
}

export default App
