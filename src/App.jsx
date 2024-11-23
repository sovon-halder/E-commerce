import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Banner from './components/homepage/Banner'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <>

<RouterProvider router={router} />

    <Header></Header>
    <Banner></Banner>
    <div className='min-h-screen'></div>
    <Footer></Footer>
    
    </>
  )
}

export default App
