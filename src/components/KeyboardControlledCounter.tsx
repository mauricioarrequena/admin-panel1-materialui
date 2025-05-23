import { useEffect, useState } from "react";
import styles from "../styles/components/KeyboardControlledCounter.module.css";

export default function KeyboardControlledCounter() {
  const [counter, setCounter] = useState<number>(0);

  function incremet() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => {
      if (prevCounter === 0) {
        return 0;
      }
      return prevCounter - 1;
    });
  }

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "ArrowUp") {
        incremet();
      } else if (event.key === "ArrowDown") {
        decrement();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className={styles.keyboardControlledCounter}>
      <span>{counter}</span>
      <div className={styles.buttons}>
        <button onClick={incremet} className={styles.button}>
          increment
        </button>
        <button onClick={decrement} className={styles.button}>
          descrement
        </button>
      </div>
    </div>
  );
}
