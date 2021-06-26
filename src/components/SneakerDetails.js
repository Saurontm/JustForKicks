import { DetailWrapper, BackButton } from "../styles";
import DeleteButton from "./DeleteButton";
import { useParams, Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import productStore from "../stores/productStore";
import { observer } from "mobx-react-lite";
import UpdateButton from "./UpdateButton";

const SneakerDetail = () => {
  const history = useHistory();
  const productSlug = useParams().productSlug;
  const sneaker = productStore.products.find(
    (sneaker) => sneaker.slug === productSlug
  );

  if (!sneaker) return <Redirect to="/products" />;
  return (
    <div>
      <Helmet>
        <title>{sneaker.name}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <DetailWrapper>
        <BackButton onClick={() => history.goBack()}>back</BackButton>
        <img src={sneaker.imageURL} alt={sneaker.name} />

        <h4>{sneaker.name}</h4>
        <p>{sneaker.description}</p>
        <p>{sneaker.price} KD</p>
        <UpdateButton sneaker={sneaker}></UpdateButton>
        <DeleteButton sneakerID={sneaker.id} history={history}></DeleteButton>
      </DetailWrapper>
    </div>
  );
};

export default observer(SneakerDetail);
