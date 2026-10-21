import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Header from './components/Header'
import Footer from './components/Footer'
import Exito from './pages/Exito'
import NoEncontrado from './pages/NoEncontrado'
import { CarritoContext } from './context/CarritoContext'
import { useState } from 'react'
import Nosotros from './pages/Nosotros'

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <div className="app">
      <CarritoContext.Provider value={{carrito, setCarrito}}>
      <Header/>
      <main className="app-main">
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/producto/:id' element={<DetalleProducto />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/exito/:id' element={<Exito />} />
          <Route path='*' element={<NoEncontrado />} />
          <Route path='/nosotros' element={<Nosotros/>}/>
        </Routes>
      </main>
      <Footer/>
      </CarritoContext.Provider>
    </div>
  )
}

export default App
