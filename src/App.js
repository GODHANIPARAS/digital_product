import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductData from './ProductData';
import HomePage from './HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/product/:userId" element={<ProductData />} />
      <Route path="/" element={<HomePage />} />
    </Routes>

  )
}

export default App