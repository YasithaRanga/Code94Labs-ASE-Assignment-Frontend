import styles from "./Layout.module.css"
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.user}>
          <p className={styles.user_name}>ADMIN</p>
          <img
            className={styles.user_carrot}
            src="/assets/eva_arrow-down-fill.svg"
          />
          <div className={styles.user_image}>
            <span className={styles.user_active}></span>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
