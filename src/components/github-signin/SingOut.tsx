import { signOut } from '../../../auth';
import styles from './githubBtn.module.css';

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" className={styles.btn}>
        Log Out
      </button>
    </form>
  );
}
