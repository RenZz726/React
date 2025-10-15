import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
function App() {
  const seatNumbers = [1, 2, 3, 5];
  const person = {
    name: "Rob",
    message: "Hi there!",
    seatNumbers: [1, 4, 7]
  };

  return (
    <div className="App">
      {/* <Hello person={person}/> */}
      <Fruits />

    </div>
  );
}

export default App;
