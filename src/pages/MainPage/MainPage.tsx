import React, { useState } from 'react';
import Section from '@/containers/Section/Section';
import { Button } from '@/components/Action/Action';
import { ModalWithTrigger } from '@/components/Modal/Modal';
import LoginForm from '@/screens/LoginForm/LoginForm';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import { Text } from '@/components/Typography/Typography';
import { useAuth } from '@/hooks/useAuth';

const MainPage = () => {
	const {handleLoginSubmit, handleRegisterSubmit} = useAuth();

	return (
		<Section>
			<div style={{ display: 'flex', gap: '20px' }}>
				<ModalWithTrigger triggerText={'demo.logIn'}>
					<LoginForm onSubmit={handleLoginSubmit}/>
				</ModalWithTrigger>
				<ModalWithTrigger triggerText={'demo.signUp'}>
					<RegisterForm onSubmit={handleRegisterSubmit}/>
				</ModalWithTrigger>
			</div>
		</Section>
	);
};

export default MainPage;
