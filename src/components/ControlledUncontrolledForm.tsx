import { useRef, useState } from "react";
import styles from "../styles/components/ControlledUncontrolledForm.module.css";

export default function ControlledUncontrolledForm() {
  const [firstName, setFirstName] = useState<string>("");
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(
      `controlled ${firstName} -- uncontrolled ${phoneNumberRef.current?.value}`
    );
  };

  return (
    <div className={styles.addStudent}>
      <div className={styles.addStudent__header}>
        <h3>Register student</h3>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameSection}>
          <div className={styles.input}>
            <label className={styles.input__label}>First name</label>
            <input
              className={styles.input__field}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label className={styles.input__label}>
              number (optional){" "}
            </label>
            <input
              className={styles.input__field}
              ref={phoneNumberRef}
              type="text"
            />
          </div>
        </div>
        <div className={styles.submitSection}>
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
