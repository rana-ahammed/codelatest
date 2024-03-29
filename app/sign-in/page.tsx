import SignInBtns from '@/components/SignInBtns';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect('/dashboard');
  }
  return <SignInBtns />;
}
