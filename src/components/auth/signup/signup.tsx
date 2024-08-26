'use client';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import Image from 'next/image';
// import * as actions from '@/actions';
// import { useFormState } from 'react-dom';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import paths from '@/paths';
import {
  signupUser,
  SignupUserFormState,
} from '@/models/interfaces/auth.interface';

interface SignupProps {
  onClientAuthToggle?: () => void;
  callback?: () => void;
}

const RedirectToSignin = () => {
  return (
    <>
      <span className="text-tertiary-text">Already have an account?</span>
      Login
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

const Signup = (props: SignupProps) => {
  const router = useRouter();
  const { onClientAuthToggle } = props;

  // SERVER HANDLING OF FORMS
  // const [formState, action] = useFormState(actions.signup, {
  //   message: '',
  // });

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const disableSubmit =
    !formData.email || !formData.username || !formData.password ? true : false;
  const [formState, setFormState] = useState<SignupUserFormState>({
    errors: {},
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    try {
      const email = formData.email;
      const username = formData.username;
      const password = formData.password;

      // validate the data and based on validation return errors in message
      const result = signupUser.safeParse({
        email,
        username,
        password,
      });

      // validate the data and based on validation return errors in message
      if (!result.success) {
        const errors = { errors: result.error.flatten().fieldErrors };
        setFormState(errors);
        return;
      }

      // Use the email/username and password to signin

      // sigin failed return error message
      let signupFailed = false;
      if (signupFailed) {
        setFormState({ errors: { _form: ['Unable to signin at the moment'] } });
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        setFormState({ errors: { _form: [error.message] } });
        return;
      } else {
        setFormState({ errors: { _form: ['Something went wrong'] } });
        return;
      }
    }

    // signin successful? => save token to storage and redirect to /posts
    router.push(paths.posts());
    props.callback?.();
  };

  return (
    <section className="flex flex-col min-h-fit items-center p-0.5 rounded-lg w-1/3 bg-custom-gradient min-w-[90vw] sm:min-w-[463px]">
      <div className="flex flex-col gap-12 h-full w-full rounded-lg bg-section-background px-6 py-10">
        <div className="flex flex-col text-center gap-2">
          <h5 className="uppercase text-tertiary-text text-sm tracking-wide">
            Sign Up
          </h5>
          <h3 className="text-lg font-semibold">
            Create an account to continue
          </h3>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(event) =>
                setFormData((formData) => ({
                  ...formData,
                  email: event.target.value,
                }))
              }
              isInvalid={!!formState.errors.email}
              errorMessage={formState.errors.email}
            />
            <Input
              id="username"
              name="username"
              label="Username"
              placeholder="Choose a preferred username"
              value={formData.username}
              onChange={(event) =>
                setFormData((formData) => ({
                  ...formData,
                  username: event.target.value,
                }))
              }
              isInvalid={!!formState.errors.username}
              errorMessage={formState.errors.username}
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="Choose a strong password"
              value={formData.password}
              onChange={(event) =>
                setFormData((formData) => ({
                  ...formData,
                  password: event.target.value,
                }))
              }
              isInvalid={!!formState.errors.password}
              errorMessage={formState.errors.password}
            />
            {formState.errors._form ? (
              <div className="text-sm text-red-500 flex flex-col">
                {formState.errors._form?.join(', ')}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              disabled={disableSubmit}
              className={disableSubmit ? 'opacity-50 cursor-not-allowed' : ''}
            >
              Continue
            </Button>
            {onClientAuthToggle ? (
              <button
                type="button"
                onClick={onClientAuthToggle}
                className="cursor-pointer text-sm text-primary-text bg-transparent flex items-center gap-1"
              >
                <RedirectToSignin />
              </button>
            ) : (
              <Link
                className="cursor-pointer text-sm text-primary-text flex items-center gap-1"
                href="/signin"
              >
                <RedirectToSignin />
              </Link>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
