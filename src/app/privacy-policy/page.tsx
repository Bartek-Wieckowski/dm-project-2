import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default function PrivacyPolicyPage() {
  revalidatePath('/privacy-policy');
  redirect(`/`);

  return <div>Privacy Policy</div>;
}
