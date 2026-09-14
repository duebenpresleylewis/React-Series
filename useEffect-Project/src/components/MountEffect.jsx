import { useEffect } from "react";

export default function MountEffect() {
  useEffect(() => {
    console.log("MountEffect: mounted");
    return () => {
      console.log("MountEffect: unmounted");
    };
  }, []);

  return (
    <section>
      <h3>Mount-only Effect</h3>
      <p>Logs when the component mounts and unmounts. See the console.</p>
    </section>
  );
}
