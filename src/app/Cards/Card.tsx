import styles from "./card.module.css"

export default function Card({title, children}: {title: string, children: React.ReactElement}) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.mat}>
        {children}
      </div>
    </div>
  );
}
