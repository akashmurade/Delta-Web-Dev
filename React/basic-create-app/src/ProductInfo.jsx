export default function ProductInfo({ title, features }) {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#5ce1e6",
        color: "black",
        flexGrow: 1, // Makes it expand
      }}
    >
      <h4 style={{ fontWeight: "800" }}>{title}</h4>
      <ul style={{ textAlign: "left", paddingLeft: "2rem" }}>
        {features.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}
