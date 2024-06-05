import { useForm } from "react-hook-form";
import UseCrud from "../../hooks/UseCrud";

const FormReserve = ({ hotelId }) => {

  const { handleSubmit, register, reset } = useForm()

  const { response, getApi, createApi, deleteApi, updateApi} = UseCrud()

  const submit = data => {
    const url = 'https://booking-node.onrender.com/hotels'
    data.hotelId = Number(hotelId)
    createApi(url, data)
  } 

  return (
    <section>
      <h3>do you want to reserve this hotel</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>check-in</span>
          <input {...register('checkIn')} type="date"/>
        </label>
        <label>
          <span>check-out</span>
          <input {...register('checkOut')} type="date"/>
        </label>
        <button>submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
