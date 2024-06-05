import FormReviews from '../components/ReservationPage/FormReviews'
import ReserveCard from "../components/ReservationPage/ReserveCard"
import UseCrud from "../hooks/UseCrud"
import { useEffect, useState } from "react"

const ReservationPage = () => {

    const [reserveSelected, setReserveSelected] = useState()
    const {response, getApi, createApi, deleteApi, updateApi} = UseCrud()    

    useEffect(() => {
        const url = 'https://booking-node.onrender.com/hotels/1s'
        getApi(url)
    }, [])

  return (
    <section>
       <FormReviews 
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}        
       />
        <h2>reservations</h2>
        <div>
            {
              response?.map(reserve => (
                <ReserveCard
                key={reserve.id}
                reserve={reserve}
                setReserveSelected={setReserveSelected}
                deleteApi={deleteApi}
                />
              ))              
            }
        </div>
    </section>
  )
}

export default ReservationPage
{/*
    <FormReviews 
    setReserveSelected={setReserveSelected}
/>*/
}