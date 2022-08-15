import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {

let title = "My activities for the week"
  return (
    <div>
     <NavBar title={title}/>
     <Todo title="learning react" datetime="19th October, 2022"/>
     <Todo title="learning react" datetime="19th October, 2022"/>
     <Todo title="learning react" datetime="19th October, 2022"/>
     <Todo title="learning react" datetime="19th October, 2022"/>
     <Todo title="learning react" datetime="19th October, 2022"/>
    </div>
  )
}

export default App
