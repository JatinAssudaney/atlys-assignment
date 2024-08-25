'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import Image from 'next/image';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';

const Signup = () => {
  const [formState, action] = useFormState(actions.signup, {
    message: '',
  });
  return (
    <section className="flex flex-col min-h-fit items-center p-0.5 rounded-lg min-w-[420px] w-1/3 bg-custom-gradient">
      <div className="flex flex-col gap-12 h-full w-full rounded-lg bg-section-background px-6 py-10">
        <div className="flex flex-col text-center gap-2">
          <h5 className="uppercase text-tertiary-text text-sm tracking-wide">
            Sign Up
          </h5>
          <h3 className="text-lg font-semibold">
            Create an account to continue
          </h3>
        </div>
        <form className="flex flex-col gap-5" action={action}>
          <div className="flex flex-col gap-4">
            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <Input
              id="username"
              name="username"
              label="Username"
              placeholder="Choose a preferred username"
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="Choose a strong password"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button type="submit">Continue</Button>
            <Link
              className="cursor-pointer text-sm text-primary-text flex items-center gap-1"
              href="/signin"
            >
              <span className="text-tertiary-text">
                Already have an account?
              </span>
              Login
              <Image
                className="bg-none"
                alt="→"
                src="/icons/right-arrow.svg"
                width={12}
                height={12}
              />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
