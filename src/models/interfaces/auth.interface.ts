import { z } from 'zod';

export enum AUTH_TYPE {
  SIGNIN = 'signin',
  SIGNUP = 'signup',
}

export interface SigninUserFormState {
  errors: {
    emailOrUsername?: string[];
    password?: string[];
    _form?: string[];
  };
}

export const signinUser = z.object({
  emailOrUsername: z
    .string()
    .min(3, 'Email/Username must be at least 3 characters long'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  // .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  // .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  // .regex(/[0-9]/, 'Password must contain at least one number')
  // .regex(/[@$!%*?&]/, 'Password must contain at least one special character'),
});

export interface SignupUserFormState {
  errors: {
    email?: string[];
    username?: string[];
    password?: string[];
    _form?: string[];
  };
}

export const signupUser = z.object({
  email: z.string().email('Invalid email address'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .max(20, 'Username must be no more than 20 characters long')
    .regex(
      /^[a-zA-Z0-9_.]+$/,
      'Username can only contain letters, numbers, underscores, and periods'
    ),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  // .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  // .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  // .regex(/[0-9]/, 'Password must contain at least one number')
  // .regex(/[@$!%*?&]/, 'Password must contain at least one special character'),
});
