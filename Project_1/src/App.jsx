import { useState } from "react";

import "./App.css";
import Cart from "./Components/Cart";

function App() {
  const individuals = [
    { name: "Rohit", age: 35, profession: "Labour" },
    { name: "Kohit", age: 45, profession: "Doctor" },
    { name: "Pohit", age: 25, profession: "IT Lead" },
  ];

  return (
    <>
      <div className="h-screen w-full flex justify-center gap-6 items-center">
        {individuals?.map((individual, index) => {
          return (
            <Cart
              name={individual.name}
              age={individual.age}
              profession={individual.profession}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
