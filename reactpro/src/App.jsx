import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponents from "./components/ConditionalComponents"
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
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
      {/* <ConditionalComponents /> */}
      {/* <Fruits /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      <Form />

    </div>
  );
}

export default App;
                         