import styles from "./Layout.module.css"
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <div className={styles.row}>
        <div className="page-title">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
