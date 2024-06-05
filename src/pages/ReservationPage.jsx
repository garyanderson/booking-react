import FormReviews from '../components/ReservationPage/FormReviews'
import ReserveCard from "../components/ReservationPage/ReserveCard"
import UseCrud from "../hooks/UseCrud"
import { useEffect, useState } from "react"

const ReservationPage = () => {

    const [reserveSelected, setReserveSelected] = useState()
    const {response, getApi, createApi, deleteApi, updateApi} = UseCrud()    

    useEffect(() => {
        const url = 'http://localhost:8080/booking'
        getApi(url)
    }, [])
console.log(reserveSelected)
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
                reserveSelected={reserveSelected}
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