import { DetailWrapper, BackButton } from "../styles";
import { useParams, Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import brandStore from "../stores/brandStore";
import productStore from "../stores/productStore";
import { observer } from "mobx-react-lite";
import SneakerList from "./SneakerList";

const BrandDetail = () => {
  const history = useHistory();
  const brandSlug = useParams().brandSlug;
  console.log(useParams().brandSlug);
  const brand = brandStore.brands.find((brand) => brand.slug === brandSlug);

  const products = brand.products.map((product) =>
    productStore.getProductById(product.id)
  );

  if (!brand) return <Redirect to="/brands" />;
  return (
    <div>
      {console.log(brand)}
      <Helmet>
        <title>{brand.name}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <DetailWrapper className="brand">
        <BackButton onClick={() => history.goBack()}>back</BackButton>
        <img src={brand.image} alt={brand.name} style={{ display: "block" }} />
        {/* <h4>{brand.name}</h4> */}
        <SneakerList sneakers={products} brand={brand} />
      </DetailWrapper>
    </div>
  );
};

export default observer(BrandDetail);
