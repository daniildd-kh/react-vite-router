import Card from '@/containers/Card/Card';
import Section from '@/containers/Section/Section';
import { useAuth } from '@/hooks/useAuth';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import React, { Suspense } from 'react';

const LazyRegisterForm = React.lazy(
	() => import('@/screens/RegisterForm/RegisterForm')
);

const RegisterPage = () => {
	const { handleRegisterSubmit } = useAuth();
	return (
		<Section>
			<Card>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyRegisterForm onSubmit={handleRegisterSubmit} />
				</Suspense>
			</Card>
		</Section>
	);
};

export default RegisterPage;
