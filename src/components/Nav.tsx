import Link from "next/link"
import styles from "@/styles/Nav.module.css"

const Nav = () => {
  return (
    <nav>
      <Link href="/" className={styles.link}>
        Home
      </Link>

      <Link href="/light" className={styles.link}>
        Light
      </Link>

      <Link href="/dark" className={styles.link}>
        Dark
      </Link>
    </nav>
  )
}

export default Nav
