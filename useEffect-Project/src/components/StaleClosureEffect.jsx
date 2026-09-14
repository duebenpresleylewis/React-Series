import { useEffect, useRef, useState } from "react";

// Demonstrates a stale closure and a ref-based fix
export default function StaleClosureEffect() {
  const [count, setCount] = useState(0);
  const savedCallback = useRef();

  // callback that will be called by the interval
  useEffect(() => {
    savedCallback.current = () => {
      setCount((c) => c + 1);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      // use ref to always call the latest callback
      savedCallback.current();
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section>
      <h3>Stale Closure Fix</h3>
      <p>
        Count updated from interval using a ref to avoid stale closure: {count}
      </p>
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}
