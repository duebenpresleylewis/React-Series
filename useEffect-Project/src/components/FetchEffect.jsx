import { useState, useEffect } from "react";

export default function FetchEffect() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    async function load() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1",
          {
            signal: controller.signal,
          },
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message || "error");
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return (
    <section>
      <h3>Fetch Effect</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <pre style={{ maxWidth: 400, overflow: "auto" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </section>
  );
}
