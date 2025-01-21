import React, { useState } from 'react';
import Section from '@/containers/Section/Section';
import { Button } from '@/components/Action/Action';
import Modal from '@/components/Modal/Modal';
import LoginForm from '@/screens/LoginForm/LoginForm';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import { Text } from '@/components/Typography/Typography';

const MainPage = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

	const openLoginModal = () => setIsLoginModalOpen(true);
	const closeLoginModal = () => setIsLoginModalOpen(false);

	const openRegisterModal = () => setIsRegisterModalOpen(true);
	const closeRegisterModal = () => setIsRegisterModalOpen(false);

	return (
		<Section>
			<div style={{ display: 'flex', gap: '20px' }}>
				<Button onClick={openLoginModal}>
					<Text value={'demo.logIn'} />
				</Button>
				<Button onClick={openRegisterModal}>
					<Text value={'demo.signUp'} />
				</Button>
			</div>

			<Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
				<LoginForm />
			</Modal>

			<Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
				<RegisterForm />
			</Modal>
		</Section>
	);
};

export default MainPage;
