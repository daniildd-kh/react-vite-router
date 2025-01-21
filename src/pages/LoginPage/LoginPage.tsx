import React from 'react';
import Layout from '@/containers/Layout/Layout';
import Section from '@/containers/Section/Section';
import Card from '@/containers/Card/Card';
import LoginForm from '@/screens/LoginForm/LoginForm';

const LoginPage = () => {
  return (
      <Section>
        <Card>
          <LoginForm />
        </Card>
      </Section>
  );
};

export default LoginPage;