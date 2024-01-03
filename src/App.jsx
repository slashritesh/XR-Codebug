
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ARexperience from './pages/ARexperience'
import VRexperience from './pages/VRexperience'
import Homepage from './pages/Homepage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/'element={<Homepage />} />
        <Route path='/ar' element={<ARexperience />} />
        <Route path='/vr'element={<VRexperience />}  />
      </Routes>
    </>
  )
}

export default App
