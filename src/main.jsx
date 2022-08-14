import React from 'react'
import ReactDOM from 'react-dom/client'
import Canvas from './components/Experience'
import Header from './components/Header'
import Store from './components/store/Store'
import Footer from './components/Footer'
import './css/index.css'
import Experience from './components/Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Store />
    <Experience />
    <Footer />
  </React.StrictMode>
)
