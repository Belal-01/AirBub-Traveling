import React from 'react'
const Cart = (props) => { 
 return(
<>
    <div className="cardd">
        <div className="card__img">
          <img className='card-img-top' src={`../../public/images2/${props.imageUrl}`} alt="card image" />
        </div>

        <div className="card__info">
          <div className="card__info--location">
            <img src="../../public/images2/Fill 219.png" alt="" />
            <span className='country'>{props.location}</span>
            <span className='map-link'><a href= {props.googleMapsUrl}>View on google map</a></span>
          </div>
          <div className="card__info--place">
            <h3>{props.title}</h3>
          </div>
          <div className="card__info--date">
            <span className="from">{props.startDate}</span> - 
            <span className="to">{props.endDate}</span>
          </div>
          <div className="discribtion">
            <p>{props.description}</p>
          </div>
        </div>
      </div> 
      <div className="line"></div>
  </> 
  )  
}

export default Cart
