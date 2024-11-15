import React from 'react'
import {Routes,Route} from 'react-router-dom'
React
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Add from './pages/add/Add.jsx'
import List from './pages/list/List.jsx'
import Orders from './pages/orders/Orders.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  const url = import.meta.env.VITE_API_URL || "http://localhost:5000";

  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
