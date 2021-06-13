import loveLetter from "../nike-air-force-1-07-qs-love-letter.png";
import SneakersList from "./SneakerList";
import "../App.css";
import { Title, Description, ShopImage } from "../styles";

const HomePage = () => {
  return (
    <div>
      <div>
        <Title>JUST FOR KICKS</Title>
        <Description>find your sole-mate</Description>
        <ShopImage id="shop-image" src={loveLetter} alt="love letters" />
      </div>
      <SneakersList />
    </div>
  );
};

export default HomePage;
