'use server';

import { redirect } from 'next/navigation';

export async function signin(
  formState: { message: string },
  formData: FormData
) {
  try {
    const emailOrUsername = formData.get('emailOrUsername');
    const password = formData.get('password');

    // validate the data and based on validation return errors in message
    let isInvalid = false;
    if (isInvalid) return { message: '' };

    // Use the email/username and password to signin

    // sigin failed return error message
    let signinFailed = false;
    if (signinFailed) return { message: '' };
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: 'Something went wrong...',
      };
    }
  }

  // signin successful? => save token to storage and redirect to /posts
  redirect('/posts');
}

export async function signup(
  formState: { message: string },
  formData: FormData
) {
  try {
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');

    // validate the data and based on validation return errors in message
    let isInvalid = false;
    if (isInvalid) return { message: '' };

    // Use the email, username and password to signup

    // signup failed return error message
    let signinFailed = false;
    if (signinFailed) return { message: '' };
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: 'Something went wrong...',
      };
    }
  }

  // signup successful? => save token to storage and redirect to /posts
  redirect('/posts');
}
