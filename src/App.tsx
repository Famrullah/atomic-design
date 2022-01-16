import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/index'
import '../assets/style/tailwind/main.css'
import '../assets/style/main.scss'

export const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
)
