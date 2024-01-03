
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ARexperience from './pages/ARexperience'
import VRexperience from './pages/VRexperience'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/'element={<h1>Home Page</h1>} />
        <Route path='/ar' element={<ARexperience />} />
        <Route path='/vr'element={<VRexperience />}  />
      </Routes>
    </>
  )
}

export default App
