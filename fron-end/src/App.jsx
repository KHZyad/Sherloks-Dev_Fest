import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Navigation } from './layouts/Navigation'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'

import {MainDashboard}  from './pages/MainDashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigation/>} >
      <Route index element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<MainDashboard />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
