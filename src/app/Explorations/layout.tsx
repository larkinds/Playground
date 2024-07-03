import styles from "./layout.module.css"

export default function ToysLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className={styles.layout}>
        <h1 className="text-blue-400 text-xl">Experiments</h1>
        <nav></nav>
   
        {children}
      </main>
    )
  }