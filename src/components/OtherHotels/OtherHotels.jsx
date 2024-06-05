import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotels = ({hotel}) => {
 const url = `https://booking-node.onrender.com/hotels?cityId=${hotel?.cityId}`
 const [ hotelsInCity, getHotelInCity] = useFetch(url)

  useEffect(() => {
    if (hotel) {
    getHotelInCity()
    }

  }, [hotel])


  return (
    <section>
        <h3>Other hotels in <span>{hotel?.city.name}</span></h3>
    <div>
        {
            hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map(hotelInfo => (
                <HotelCard
                 key={hotelInfo.id}
                 hotel={hotelInfo}
                />

            ))
        }
    </div>
    </section>
  )
}

export default OtherHotels
