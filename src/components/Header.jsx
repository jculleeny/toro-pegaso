import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="logo-brand-name-container">
          <img src="https://via.placeholder.com/50x50.png" />
          <h1>Toro Pegaso</h1>
        </div>
        <div className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header