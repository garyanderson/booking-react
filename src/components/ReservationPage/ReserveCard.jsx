

const ReserveCard = ({ reserve, setReserveSelected, reserveSelected, deleteApi }) => {
    
    const checkIn = new Date(reserve.checkIn)
    const checkOut = new Date(reserve.checkOut) 
    const reservationDays = (checkOut - checkIn) / (1000 * 60 * 60 * 24)

    const handleReview = () => {
        const obj = {
            ...reserve,
            reservationDays,
            subtotal: reserve.hotel.price * reservationDays
        }
        
        setReserveSelected(obj)
        //console.log(reserve)
    }

    const handleDeletBooking = () => {
        const url = `http://localhost:8080/reviews/${reserve.id}`
        deleteApi(url, reserve.id)
    }

    console.log(reserveSelected)
  return (
    <article>
        <header>
            <img src={reserve?.hotel.images[0].url} alt="" />
        </header>        
        <section>
            <h3>{reserve?.hotel.name}</h3>
            <div>{reserve?.hotel.city.name}, {reserve?.hotel.city.country}</div>
            <div onClick={handleReview}>rate and coments this visite...</div>
        </section>
        <section>
            <ul>
                <li><span>reservation days</span><span> {reservationDays} </span></li>
                <li><span>subtotal price</span><span> {reserve?.hotel.price * reservationDays}USD </span></li>
            </ul>
        </section>
        <footer>
            <button onClick={handleDeletBooking}>eliminar</button>
        </footer>
    </article>
)}

export default ReserveCard