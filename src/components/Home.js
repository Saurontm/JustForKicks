import loveLetter from "../nike-air-force-1-07-qs-love-letter.png";
import SneakersList from "./SneakerList";
import "../App.css";
import { Title, Description, ShopImage } from "../styles";
import { useState } from "react";
import SneakerDetail from "./SneakerDetails";

const HomePage = () => {
  const [sneaker, setSneaker] = useState(null);

  const setView = () => {
    return sneaker ? (
      <SneakerDetail sneaker={sneaker} />
    ) : (
      <SneakersList setSneaker={setSneaker} />
    );
  };

  return (
    <div>
      <div>
        <Title>JUST FOR KICKS</Title>
        <Description>find your sole-mate</Description>
        <ShopImage id="shop-image" src={loveLetter} alt="love letters" />
      </div>
      {setView()}
    </div>
  );
};

export default HomePage;
