import {  RouterProvider } from 'react-router-dom'
//import{AiOutlineSearch} from 'react-icond/ai'{not working}
import './App.css'
import'./About.css'
import router from './routes/Routes'


function App() {

  

  return (
    <div>

<RouterProvider router={router} />
    
    </div>
  )
}

export default App
