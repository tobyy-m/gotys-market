import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/producto/:id' element={<DetalleProducto />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </>
  )
}

export default App
