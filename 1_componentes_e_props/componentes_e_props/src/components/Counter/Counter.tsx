import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue((prevValue) => prevValue + 1)}>+</button>
      <p>{value}</p>
      <button onClick={() => setValue((prevValue) => prevValue - 1)}>-</button>
    </div>
  );
};

export default Counter;
