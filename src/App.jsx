import { Routes,Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Athu from './pages/Athu'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import Product from './pages/Product';
import Addproduct from './pages/Addproduct';
import Header from './components/Header';
import Users from './pages/Users';
import Orders from './pages/Orders';

function App() {

  return (
    <>
    <Routes>
      <Route  path='/' element={<Athu/>}/>
      <Route  path='/dash' element={<Dashboard/>}/>
      <Route  path='/product' element={<Product/>}/>
      <Route  path='/add' element={<Addproduct/>}/>
      <Route  path='/user' element={<Users/>}/>
      <Route  path='/order' element={<Orders/>}/>

    </Routes>
    <ToastContainer/>

     
    </>
  )
}

export default App
