import { SignOut } from '@/components/github-signin/SingOut';
import { auth } from '../../../../auth';

export default async function ProfilePage() {
  const session = await auth();

  if (!session || !session.user) return null;

  return (
    <>
      <div>
        <h1>{session?.user.name}</h1>
      </div>
      <div>
        <SignOut />
      </div>
    </>
  );
}
