import React from "react";
import { Car } from "./car/Car";

const App: React.FC = () => {
  const myCar = new Car("Toyota", "Corolla", 2022);

  return (
    <div>
      <h1>Welcome to My Car App 🚗</h1>
      <button onClick={() => myCar.start()}>Start Car</button>
    </div>
  );
};

export default App;
