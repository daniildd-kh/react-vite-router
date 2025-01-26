import Section from '@/containers/Section/Section';
import Card from '@/containers/Card/Card';
import { loginMockFetch } from '@/api/utils';
import { useAuth } from '@/hooks/useAuth';
import React, { Suspense } from 'react';

const LazyLoginForm = React.lazy(() => import('@/screens/LoginForm/LoginForm'));

const LoginPage = () => {
	const { handleLoginSubmit } = useAuth();

	return (
		<Section>
			<Card>
				<Suspense fallback={<div>Loading...</div>}>
					<LazyLoginForm onSubmit={handleLoginSubmit} />
				</Suspense>
			</Card>
		</Section>
	);
};

export default LoginPage;
