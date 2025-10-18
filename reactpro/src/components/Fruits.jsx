import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Orange"];

  const fruits = [
    { name: "Apple", price: 10, soldOut: false },
    { name: "Orange", price: 3, soldOut: true },
    { name: "Grape", price: 6, soldOut: false },
    { name: "Banana", price: 4, soldOut: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
