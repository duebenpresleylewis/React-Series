import { useState, useEffect } from "react";

export default function DepEffect() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("DepEffect: value changed ->", value);
  }, [value]);

  return (
    <section>
      <h3>Dependency Effect</h3>
      <p>Effect runs only when the local value changes.</p>
      <div>
        <button onClick={() => setValue((v) => v + 1)}>Increment</button>
        <span style={{ marginLeft: 8 }}>Value: {value}</span>
      </div>
    </section>
  );
}
