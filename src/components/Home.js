import loveLetter from "../nike-air-force-1-07-qs-love-letter.png";
import "../App.css";
import { Title, Description, ShopImage } from "../styles";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>JFKicks. Find your sole-mate </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Title>JUST FOR KICKS</Title>
      <Description>find your sole-mate</Description>
      <ShopImage id="shop-image" src={loveLetter} alt="love letters" />
    </div>
  );
};

export default HomePage;
