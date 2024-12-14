import {  RouterProvider } from 'react-router-dom'
import{AiOutlineSearch} from 'react-icond/ai'
import './App.css'
import'./About.css'
import router from './routes/Routes'


function App() {

  

  return (
    <>

<RouterProvider router={router} />
    
    </>
  )
}

export default App
