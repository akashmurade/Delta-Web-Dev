import ProductInfo from "./ProductInfo";
import Prices from "./Prices";

export default function Product({ title, features, oldPrice, newPrice }) {
  return (
    <div
      style={{
        border: "2px solid black",
        borderBottomLeftRadius: "1.5rem",
        borderBottomRightRadius: "1.5rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProductInfo
        title={title}
        features={features}
        oldPrice={oldPrice}
        newPrice={newPrice}
      />
      <Prices oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  );
}
