const Sundries = () => {
  return (
    <div className="sundries">
      <div className="sundries-container">
        <div className="sundries-card">
          <h3>Denim Jacket</h3>
          <div className="sundries-img-wrapper">
            <img src="https://via.placeholder.com/250x400.png" />
          </div>
          <div className="sundries-description-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit magna lacus, et sodales neque semper id. Nunc semper, leo id fringilla tincidunt, metus dui eleifend diam, a pharetra purus lacus accumsan odio.
            </p>
          </div>
          <div className="sundries-price-wrapper">
            <h4>$50</h4>
            <button className="btn-purchase">Purchase</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sundries