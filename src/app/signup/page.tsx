import Signup from '@/components/auth/signup/signup';
import Logo from '@/components/common/Logo';

export default function SignupPage() {
  return (
    <main className="flex flex-col gap-12 min-h-screen items-center justify-center">
      <Logo />
      <Signup />
    </main>
  );
}
