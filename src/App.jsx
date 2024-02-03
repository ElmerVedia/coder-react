import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemListcontainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListcontainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/CartWidget/Cart'
import CartProvider from './context/CartContext'
import FormPedido from './components/Form/FormPedido'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/orden" element={<FormPedido/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App