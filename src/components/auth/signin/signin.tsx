'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';

const Signin = () => {
  const [formState, action] = useFormState(actions.signin, {
    message: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  return (
    <section className="flex flex-col min-h-fit items-center p-0.5 rounded-lg min-w-[420px] w-1/3 bg-custom-gradient">
      <div className="flex flex-col gap-12 h-full w-full rounded-lg bg-section-background px-6 py-10">
        <div className="flex flex-col text-center gap-2">
          <h5 className="uppercase text-tertiary-text text-sm tracking-wide">
            Welcome Back
          </h5>
          <h3 className="text-lg font-semibold">Log into your account</h3>
        </div>
        <form className="flex flex-col gap-5" action={action}>
          <div className="flex flex-col gap-4">
            <Input
              id="emailOrUsername"
              name="emailOrUsername"
              label="Email or Username"
              placeholder="Enter your email or username"
            />
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              secondaryLabel={{
                htmlFor: 'password',
                children: 'Forgot password?',
              }}
              suffix={
                <Image
                  onClick={togglePassword}
                  className="bg-none"
                  alt={showPassword ? 'hide' : 'show'}
                  src={showPassword ? '/icons/eye-slash.svg' : '/icons/eye.svg'}
                  width={16}
                  height={16}
                />
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button type="submit">Login now</Button>
            <Link
              className="cursor-pointer text-sm text-primary-text flex items-center gap-1"
              href="/signup"
            >
              <span className="text-tertiary-text">Not registered yet?</span>
              Register
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

export default Signin;
