import styles from "../styles/components/Layout.module.css";
import Sidebar from "./Sidebar";
import ControlledUncontrolledForm from "./ControlledUncontrolledForm";
import UserCard from "./UserCard";
import KeyboardControlledCounter from "./KeyboardControlledCounter";
import UserList from "./UserList";

export default function Layout() {
  const name: string = "Mauricio";
  const age: number = 25;

  function greetUser() {
    alert(`hello to ${name} who is ${age}`);
  }

  return (
    <div className={styles.outergrid}>
      <header className={styles.header}>Header</header>
      <Sidebar parentClass={styles.sidebar}></Sidebar>
      <div className={styles.content}>
        <ControlledUncontrolledForm></ControlledUncontrolledForm>
        <UserCard name={name} age={age} onClick={greetUser}></UserCard>
        <KeyboardControlledCounter></KeyboardControlledCounter>
        <UserList></UserList>
      </div>
    </div>
  );
}
