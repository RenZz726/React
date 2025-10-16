export default function Fruit({ name, price }) {
  return (
    <div>
      {/* // <li>{name} {price}</li> */}
      {price > 5 ? (
        <li>
          {name} {price}
        </li>
      ) : (
        " "
      )}
    </div>
  );
}
