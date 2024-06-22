import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductData from './ProductData';

const App = () => {
  return (
    <Routes>
      <Route path="/product/:userId" element={<ProductData />} />
    </Routes>
  )
}

export default App