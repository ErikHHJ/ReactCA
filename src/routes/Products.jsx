import { ProductsFetch } from "../components/Products";
export function Products() {
  return (
    <div>
      <ProductsFetch url={"https://v2.api.noroff.dev/online-shop"} />
    </div>
  );
}
