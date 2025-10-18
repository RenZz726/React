import { useState } from "react";
export default function Form() {
  const [name, changeName] = useState({ firstName: "", lastName: "" });
  //   function handler(e) {
  //     console.log(e.target.value);
  //     changeName(e.target.value);
  //   }
  return (
    <div>
      <form>
        {/* <input onChange={handler} type="text" value={name} />
        <input onChange={(e) => handleChange(e)} value={name} /> */}
        <input
          onChange={(e) => changeName({...name, firstName : e.target.value})}
          value={name.firstName}
        />
        <input
          onChange={(e) => changeName({...name, lastName : e.target.value})}
          value={name.lastName}
        />
      </form>
    </div>
  );
}
