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
            <li><a href="">Home</a></li>
            <li>Store</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header