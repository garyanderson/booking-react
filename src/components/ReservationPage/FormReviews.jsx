import { useForm } from "react-hook-form"
import UseCrud from "../../hooks/UseCrud"

const formReviews = ({ reserveSelected, setReserveSelected, }) => {
  
    const { handleSubmit, register, reset } = useForm()

    const { response, getApi, createApi, deleteApi, updateApi  } = UseCrud()

    const submit = data => {
        const url ='http://localhost:8080/reviews'
        data.hotelId = reserveSelected?.hotel.id
        data.rating = data.rating
        createApi(url, data)
        setReserveSelected()
        
    }
console.log(reserveSelected)
  return (
    <article>
        <h3>reserve</h3>
        <section>
            <header>
                <img src={reserveSelected?.hotel.images[0].url} alt="" />
            </header>
            <h4>{reserveSelected?.hotel.name}</h4>
            <p>{reserveSelected?.hotel.city.name}, {reserveSelected?.hotel.city.country}</p>
            <ul>
                <li><span>reservation days</span><span>{reserveSelected?.reservationDays}</span></li>
                <li><span>subtotal price</span><span>{reserveSelected?.subtotal}</span></li>
            </ul>
        </section>
            <form onSubmit={handleSubmit(submit)}>
                <label  >
                    <span>Raiting</span>
                    <select {...register('rating')}>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="1">⭐</option>
                    </select>
                </label>
                <span>Coments</span> 
                <textarea {...register('comment')}/>
                <button>enviar</button>
            </form>
        
            
    </article>
  )
}

export default formReviews