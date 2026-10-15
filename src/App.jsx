import { Route } from 'react-router'
import { Routes } from 'react-router'

import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'

function App() {
  return (
    <>
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
