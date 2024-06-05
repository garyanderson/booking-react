import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import HotelCard from "../components/HomePage/HotelCard";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/HomePage/PriceFilter";
import ".././components/style/HomePage.css";

const HomePage = () => {
  const [inputName, setInputName] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const hotels = useSelector((states) => states.hotels);

  const inputValue = useRef();

  const handleChange = () => {
    setInputName(inputValue.current.value);
  };

  const cbfilter = (hotelInfo) => {
    const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim());
    const price = Number(hotelInfo.price);
    const filterPrice = price >= fromTo.from && price <= fromTo.to;
    return filterName && filterPrice;
  };
  
  return (
    <div className="container-home">
      <div className="container-home__input">
        <input
          placeholder="nombre hotel"
          onChange={handleChange}
          value={inputName}
          ref={inputValue}
          type="text"
        />
      </div>
      <aside className="container-home__filters">
        <h3>filters</h3>
        <PriceFilter setFromTo={setFromTo} />
        <CategoryFilter />
      </aside>
      <div className="container-card">
        {hotels?.filter(cbfilter).map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
