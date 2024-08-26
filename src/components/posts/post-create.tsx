'use client';

import React, { FormEvent } from 'react';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { useState } from 'react';
import Signup from '../auth/signup/signup';
import { AUTH_TYPE } from '@/models/interfaces/auth.interface';
import Signin from '../auth/signin/signin';
import { twMerge } from 'tailwind-merge';

const PostCreate = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [authType, setAuthType] = useState<AUTH_TYPE>(AUTH_TYPE.SIGNUP);
  const [formData, setFormData] = useState({
    content: '',
  });

  const disableSubmit = !formData.content ? true : false;

  const handleModalClose = () => {
    setShowModal((showModal) => !showModal);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let userSignedIn = false;
    if (!userSignedIn) setShowModal(true);
    else {
      // Allow user to post
    }
  };

  const toggleAuth = () => {
    setAuthType((authType) => {
      if (authType === AUTH_TYPE.SIGNUP) return AUTH_TYPE.SIGNIN;
      else return AUTH_TYPE.SIGNUP;
    });
  };

  const authCallback = () => {
    setShowModal(false);
  };
  return (
    <>
      <article className="rounded-lg flex flex-col gap-4 border-2 border-primary-border bg-section-background px-5 py-6">
        <h4 className="text-primary-text text-lg font-medium text-left">
          Create post
        </h4>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex items-center gap-4 bg-main-background p-4 rounded-lg">
            <div className="h-12 w-12 rounded-full bg-section-background grid place-items-center">
              <span className="text-lg">💬</span>
            </div>
            <input
              type="text"
              placeholder="How are you feeling today?"
              className="bg-transparent flex-1 border-none text-secondary-text outline-none font-normal text-base w-full"
              value={formData.content}
              onChange={(event) => setFormData({ content: event.target.value })}
            />
          </div>
          <Button
            type="submit"
            className={twMerge(
              'place-self-end w-[111px]',
              disableSubmit ? 'opacity-50 cursor-not-allowed' : ''
            )}
            disabled={disableSubmit}
          >
            Post
          </Button>
        </form>
      </article>
      <Modal show={showModal} onClose={handleModalClose}>
        {authType === AUTH_TYPE.SIGNUP ? (
          <Signup onClientAuthToggle={toggleAuth} callback={authCallback} />
        ) : (
          <Signin onClientAuthToggle={toggleAuth} callback={authCallback} />
        )}
      </Modal>
    </>
  );
};

export default PostCreate;
