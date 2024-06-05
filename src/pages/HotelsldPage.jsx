import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Overlay, Map } from "pigeon-maps";
import OtherHotels from "../components/OtherHotels/OtherHotels";
import FormReserve from "../components/HotelsIdPage/FormReserve";
import Slider from "../components/HotelsIdPage/Slider";
import '../components/style/HotelIdPage.css'

const HotelsldPage = () => {
  const { id } = useParams();

  const url = `http://localhost:8080/hotels/${id}`;
  const [hotel, getHotel] = useFetch(url);

  useEffect(() => {
    getHotel();
  }, [id]);
console.log(hotel)
  return (
    <div className="hotel">
      <h2 className="hotel__name">{hotel?.name}</h2>
      <h3 className="hotel__rating">RATING - {hotel?.rating}</h3>
      <Slider 
        hotel={hotel}
      />
      <div>
        {hotel && (
          <Map
            height={200}
            defaultCenter={[+hotel?.lat, +hotel.lon]}
            Zoom={15}
            maxZoom={16}
            minZoom={10}
          >
            <Overlay anchor={[+hotel.lat, +hotel.lon]} offset={[20, 20]}>
              <img src="/imghotel.png" width={40} alt="" />
            </Overlay>
          </Map>
        )}
      </div>
      <section className="hotel__info">
        <h3 className="hotel__dats">
          {hotel?.city.name}, {hotel?.city.country}
        </h3>
        <p className="hotel__dats">
          <i className="bx bx-map"></i>
          <span className="hotel__address">{hotel?.address}</span>
        </p>
        <p className="hotel__description">{hotel?.description}</p>
      </section>
      {localStorage.getItem("token") ? (
        <FormReserve hotelId={hotel?.id} />
      ) : (
        <h4 className="hotel__message">
          If you want to make a reservation please{" "}
          <Link className="hotel__link" to={"/login"}>login</Link>{" "}
        </h4>
      )}
      <OtherHotels hotel={hotel} />
    </div>
  );
};

export default HotelsldPage;
