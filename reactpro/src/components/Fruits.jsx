export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Orange"];

  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 9 },
    { name: "Grape", price: 6 },
    { name: "Banana", price: 4 },
  ];
  return (
    <div>
        <ul>
            {fruits.map(fruit => (
                <li key={fruit.name}>{fruit.name} {fruit.price}</li>
            ))}
        </ul>
    </div>
  );
}
