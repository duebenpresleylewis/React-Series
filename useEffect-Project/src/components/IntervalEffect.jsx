import { useEffect, useState } from "react";

export default function IntervalEffect() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  return (
    <section>
      <h3>Interval Effect</h3>
      <p>Auto-incrementing count: {count}</p>
      <button onClick={() => setRunning((r) => !r)}>
        {running ? "Pause" : "Resume"}
      </button>
    </section>
  );
}
