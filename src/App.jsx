import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Header from './components/Header'
import Footer from './components/Footer'
import Exito from './pages/Exito'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/producto/:id' element={<DetalleProducto />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/exito/:id' element={<Exito />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
