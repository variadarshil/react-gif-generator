import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'

function App() {

  return (
    <>
      <header>GIF Generator</header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
      </Routes>
    </>
  )
}

export default App
