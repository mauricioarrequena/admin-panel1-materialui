import styles from "../styles/components/UserCard.module.css";

interface UserCardProps {
  name: string;
  age: number;
  onClick: () => void;
}

export default function UserCard({
  name,
  age,
  onClick: onClickUserCard,
}: UserCardProps) {
  return (
    <div className={styles.userCard} onClick={onClickUserCard}>
      <span>profile-image</span>
      <span>{name}</span>
      <span>{age}</span>
    </div>
  );
}
