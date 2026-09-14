import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count)
    return () => {
      console.log("second");
    };
  }, [count]);

  
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
      Count is : {count}
    </div>
  );
}

export default App;
