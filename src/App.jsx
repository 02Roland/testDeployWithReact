import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { sculptureList } from './data'
import { Form } from './composants/form'



function App() {

  function handleClick(){
    setIndex((index + 1) % sculptureList.length)
  }
  return (
    <Form TitleForm={'Login'}>
    </Form>
  )
}

export default App
