function handleFormSubmit(e) {
  e.preventDefault();
  console.log("handled");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input />
      <button>Submit</button>
    </form>
  );
}
