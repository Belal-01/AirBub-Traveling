import React from 'react'
import cardStar from "../../public/images/Star 1.png"
import cardImg from "../../public/images/image 12.png"



const Cart = (props) => { 

  let badgeText
  if (props.card.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.card.location === "Online") {
      badgeText = "ONLINE"
  }
 return(
<>
    <div className="cardd">
        <div className="card__img">
          <img className='card-img-top' src={`../../public/images/${props.card.coverImg}`} alt="card image" />
        {badgeText&&<span className="spot-point">{badgeText}</span>} 

        </div>
        <div className="card__info">
          <div className="card__info--rating">
            <img src= {cardStar} alt="rating star" />
            <span >{props.card.stats.rating}</span>
            <span className='rating-country'>{props.card.location}</span>
          </div>
          <p className="card__info--header">
            {props.card.title}
          </p>
          <div className="card__info--priceing">
          <span className='priceing'>From ${props.card.price}</span> 
          <span>/person</span>       
          </div>
        </div>

      </div> 
  </> 
  )  
}

export default Cart
