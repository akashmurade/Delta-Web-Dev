export default function Prices({ oldPrice, newPrice }) {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#ffbd59",
        color: "black",
        fontWeight: 700,
      }}
    >
      <div style={{ textDecorationLine: "line-through" }}>{oldPrice}</div>
      <div>{newPrice}</div>
    </div>
  );
}
