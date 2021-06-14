import loveLetter from "../nike-air-force-1-07-qs-love-letter.png";
import SneakersList from "./SneakerList";
import "../App.css";
import { Title, Description, ShopImage } from "../styles";
import { useState } from "react";
import SneakerDetail from "./SneakerDetails";
import products from "../products";

const HomePage = () => {
  const [sneaker, setSneaker] = useState(null);

  const [_products, setProducts] = useState(products);

  const productDelete = (sneakerID) => {
    const updatedProducts = _products.filter(
      (sneaker) => sneaker.id !== sneakerID
    );
    console.log(updatedProducts);
    setProducts(updatedProducts);
  };

  const setView = () => {
    return sneaker ? (
      <SneakerDetail
        sneaker={sneaker}
        setSneaker={setSneaker}
        productDelete={productDelete}
      />
    ) : (
      <SneakersList
        setSneaker={setSneaker}
        products={_products}
        productDelete={productDelete}
      />
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
