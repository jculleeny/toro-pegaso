import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/index.css'
import App from './App'
import Store from './components/routes/store/Store'
import About from './components/routes/About'
import Experience from './components/Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<main style={{ padding: "1rem" }}><p>There is nothing here...</p></main>} />
        </Route>
        <Route path="/playground" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
