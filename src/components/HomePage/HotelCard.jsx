import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/HotelCard.css'


  const HotelCard = ({hotel}) => {

     const Navigate  = useNavigate()
     const handleClick = () => {
      Navigate(`/hotels/${hotel.id}`)
     }

  return (
    <article className='card'>
        <header className='card__header'>
            <img className='card__img' src={hotel.images[0].url} alt={`imagen del hotel ${hotel.name}`} />
        </header>
        <section className='card__info'>
            <h3>{hotel.name}</h3>
            <p>{hotel.rating}</p>
            <span> {hotel.city.name}, {hotel.city.country}</span>
            <div>{hotel.price}</div>
        </section>
        <footer className='card__footer'>
            <button className='card__btn' onClick={handleClick}>see more...</button>
        </footer>
    </article>
  )
}

export default HotelCard