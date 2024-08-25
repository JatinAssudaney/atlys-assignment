'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
// import * as actions from '@/actions';
// import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import paths from '@/paths';

interface SigninProps {
  onClientAuthToggle?: () => void;
  callback?: () => void;
}

const RedirectToSignup = () => {
  return (
    <>
      <span className="text-tertiary-text">Not registered yet?</span>
      Register
      <Image
        className="bg-none"
        alt="→"
        src="/icons/right-arrow.svg"
        width={12}
        height={12}
      />
    </>
  );
};

const Signin = (props: SigninProps) => {
  const router = useRouter();
  const { onClientAuthToggle = null } = props;

  // SERVER HANDLING OF FORMS
  // const [formState, action] = useFormState(actions.signin, {
  //   message: '',
  // });

  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
  });
  const [formState, setFormState] = useState({ message: '' });

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    try {
      const emailOrUsername = formData.emailOrUsername;
      const password = formData.password;

      // validate the data and based on validation return errors in message
      let isInvalid = false;
      if (isInvalid) {
        setFormState({ message: '' });
        return;
      }

      // Use the email/username and password to signin

      // sigin failed return error message
      let signinFailed = false;
      if (signinFailed) {
        setFormState({ message: '' });
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        setFormState({
          message: error.message,
        });
        return;
      } else {
        setFormState({
          message: 'Something went wrong...',
        });
        return;
      }
    }

    // signin successful? => save token to storage and redirect to /posts
    router.push(paths.posts());
    props.callback?.();
  };
  return (
    <section className="flex flex-col min-h-fit items-center p-0.5 rounded-lg bg-custom-gradient min-w-[90vw] sm:min-w-[463px]">
      <div className="flex flex-col gap-12 h-full w-full rounded-lg bg-section-background px-6 py-10">
        <div className="flex flex-col text-center gap-2">
          <h5 className="uppercase text-tertiary-text text-sm tracking-wide">
            Welcome Back
          </h5>
          <h3 className="text-lg font-semibold">Log into your account</h3>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              id="emailOrUsername"
              name="emailOrUsername"
              label="Email or Username"
              placeholder="Enter your email or username"
              value={formData.emailOrUsername}
              onChange={(event) =>
                setFormData((formData) => ({
                  ...formData,
                  emailOrUsername: event.target.value,
                }))
              }
            />
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(event) =>
                setFormData((formData) => ({
                  ...formData,
                  password: event.target.value,
                }))
              }
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
            <Button type="submit" onSubmit={handleSubmit}>
              Login now
            </Button>
            {onClientAuthToggle ? (
              <button
                type="button"
                onClick={onClientAuthToggle}
                className="cursor-pointer text-sm text-primary-text bg-transparent flex items-center gap-1"
              >
                <RedirectToSignup />
              </button>
            ) : (
              <Link
                className="cursor-pointer text-sm text-primary-text flex items-center gap-1"
                href="/signup"
              >
                <RedirectToSignup />
              </Link>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signin;
