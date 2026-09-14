import { useState } from "react";
import "./App.css";
import MountEffect from "./components/MountEffect";
import DepEffect from "./components/DepEffect";
import CleanupEffect from "./components/CleanupEffect";
import FetchEffect from "./components/FetchEffect";
import IntervalEffect from "./components/IntervalEffect";
import StaleClosureEffect from "./components/StaleClosureEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ padding: 16 }}>
      <h2>useEffect Examples</h2>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setCount((c) => c + 1)}>Click Me</button>
        <span style={{ marginLeft: 8 }}>Count is : {count}</span>
      </div>

      <MountEffect />
      <hr />
      <DepEffect />
      <hr />
      <CleanupEffect />
      <hr />
      <FetchEffect />
      <hr />
      <IntervalEffect />
      <hr />
      <StaleClosureEffect />
    </div>
  );
}

export default App;
