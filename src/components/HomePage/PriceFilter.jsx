import { useForm } from "react-hook-form"
import '../style/Filters.css'

const PriceFilter = ({ setFromTo }) => {

   const { handleSubmit, register, reset } = useForm()

    const submit = data => {
      const from = data.from
      const to = data.to

      setFromTo({
        from: from === '' ? 0 : +from,
        to: to === '' ? Infinity : Number(to)
      })
    }

  return (
    <section className="price">
      <h3 className="price__name">Price</h3>
      <form className="price__form" onClick={handleSubmit(submit)}>
        <label className="price__label">
          <span>From</span><br />
          <input className="price__input" {...register('from')} type="number" placeholder="$0"/>
        </label>
        <label className="price__label">
          <span>To</span><br  />
          <input className="price__input" {...register('to')} type="number" placeholder="$∞"/>
        </label>
        <button className="price__button">Apply</button>
      </form>
    </section>
  )
}

export default PriceFilter