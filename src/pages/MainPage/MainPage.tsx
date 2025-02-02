import React, { useState } from 'react';
import Section from '@/containers/Section/Section';
import { Button } from '@/components/Action/Action';
import { ModalWithTrigger } from '@/components/Modal/Modal';
import LoginForm from '@/screens/LoginForm/LoginForm';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import { Text } from '@/components/Typography/Typography';
import { useAuth } from '@/hooks/useAuth';
import { LoaderFunctionArgs, useLoaderData } from 'react-router';

const MainPage = () => {
	const { handleLoginSubmit, handleRegisterSubmit } = useAuth();
	const data = useLoaderData();
	return (
		<Section>
			<p>Data from server: {data?.result}</p>
			<div style={{ display: 'flex', gap: '20px', marginTop: '20px'}}>
				<ModalWithTrigger triggerText={'demo.logIn'}>
					<LoginForm onSubmit={handleLoginSubmit} />
				</ModalWithTrigger>
				<ModalWithTrigger triggerText={'demo.signUp'}>
					<RegisterForm onSubmit={handleRegisterSubmit} />
				</ModalWithTrigger>
			</div>
		</Section>
	);
};

async function loader({ params, request }: LoaderFunctionArgs) {
	return Promise.resolve({
		result: 'Loader work!',
	});
}

export default { loader, element: <MainPage /> };
