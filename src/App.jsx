import { Outlet } from 'react-router-dom'
import Experience from './components/Experience'
import Header from './components/Header'
import Footer from './components/Footer'
import CanvasFrame from './components/CanvasFrame'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Experience />
      <CanvasFrame />
      <Footer />
    </div>
  )
}

export default App