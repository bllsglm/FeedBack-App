import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {
  createBrowserRouter,createRoutesFromElements, Route, RouterProvider
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Home from './pages/Home'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home/>}>
      <Route index path='/' element={<App/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);