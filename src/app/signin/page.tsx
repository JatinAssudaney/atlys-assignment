import Signin from '@/components/auth/signin/signin';
import Logo from '@/components/common/Logo';

export default function SigninPage() {
  return (
    <main className="flex flex-col gap-12 min-h-screen items-center justify-center">
      <Logo />
      <Signin />
    </main>
  );
}
