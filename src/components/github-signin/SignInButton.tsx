import { signIn } from "next-auth/react"
import styles from './githubBtn.module.css'
 
export function SignInButton() {
  return (
    <button className={styles.btn} onClick={() => signIn("github", { callbackUrl: "/profile" })}>
      Log In with Github
    </button>
  )
}