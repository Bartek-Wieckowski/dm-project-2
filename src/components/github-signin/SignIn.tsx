import { signIn } from "../../../auth"
import styles from "./githubBtn.module.css"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit" className={styles.btn}>Register with GitHub</button>
    </form>
  )
}