import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {
  createBrowserRouter,createRoutesFromElements, Route, RouterProvider
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Home from './pages/Home'
import { FeedbackProvider } from './components/context/FeedbackContext';



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
    <FeedbackProvider>
      <RouterProvider router={router} />
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById('root')
);