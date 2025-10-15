import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponents from "./components/ConditionalComponents"
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
      {/* <Fruits /> */}
      <ConditionalComponents />

    </div>
  );
}

export default App;
