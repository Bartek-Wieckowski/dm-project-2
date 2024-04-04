import { processEnv } from '../../../config/config';

export default function TermsPage() {
  const value = processEnv.NEXT_PUBLIC_USERNAME;

  return <div>{value}</div>;
}
