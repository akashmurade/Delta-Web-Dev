function handleClick(e) {
  console.log(e);
  console.log("Hello!");
}

function handleMouseOver() {
  console.log("Bye!");
}

function handleDoubleClick() {
  console.log("Double Clicked");
}

export default function Button() {
  return (
    <>
      <button onClick={handleClick}>Click me</button>;
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        eligendi laudantium, atque ullam inventore dicta sit. Atque dolor est
        asperiores veniam, aliquam itaque!
      </p>
      <button onDoubleClick={handleDoubleClick}>Double Click me</button>
    </>
  );
}
