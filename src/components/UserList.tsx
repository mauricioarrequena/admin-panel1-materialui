import styles from "../styles/components/UserList.module.css";
import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersResponse = await response.json();
      setUsers(usersResponse);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  return (
    <div className={styles.userList}>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul className={styles.list}>
          {users.map((user: any) => {
            return <li className={styles.item} key={user.id}>{user.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
