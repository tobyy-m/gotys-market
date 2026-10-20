import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Header from './components/Header'
import Footer from './components/Footer'
import Exito from './pages/Exito'
import NoEncontrado from './pages/NoEncontrado'

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="app-main">
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/producto/:id' element={<DetalleProducto />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/exito/:id' element={<Exito />} />
          <Route path='*' element={<NoEncontrado />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
