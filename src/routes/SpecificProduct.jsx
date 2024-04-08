import { ProductsFetch } from "../components/ProductsFetch.jsx";
import { useParams } from "react-router-dom";

export function SpecificProduct() {
  const { itemId } = useParams();
  return (
    <div>
      <ProductsFetch url={`https://v2.api.noroff.dev/online-shop/${itemId}`} />
    </div>
  );
}
