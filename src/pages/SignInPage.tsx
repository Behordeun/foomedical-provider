import { Text } from '@mantine/core';
import { Logo, SignInForm } from '@medplum/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SignInForm
        projectId="654455ae-918e-4650-9cfd-01ea08ec702b"
        googleClientId="397236612778-c0b5tnjv98frbo1tfuuha5vkme3cmq4s.apps.googleusercontent.com"
        onSuccess={() => navigate('/')}
    >
      <Logo size={32} />
      <Text size="lg">Sign in to Foo Provider</Text>
    </SignInForm>
  );
}
