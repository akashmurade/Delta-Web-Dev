import Product from "./Product";

export default function ProductTab({ products }) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        alignItems: "stretch",
      }}
    >
      {products.map((e) => (
        <Product {...e} style={{ flex: 1 }} />
      ))}
    </div>
  );
}
