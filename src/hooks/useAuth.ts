import { loginMockFetch, registerMockFetch } from '@/api/utils';
import { useState } from 'react';

export const useAuth = () => {
	const [loading, setLoading] = useState(false);

	const handleLoginSubmit = async (data: {
		email: string;
		password: string;
	}) => {
		setLoading(true);
		try {
			await loginMockFetch(data);
			alert('Вход выполнен');
		} catch (error) {
			throw new Error('Ошибка запроса');
		} finally {
			setLoading(false);
		}
	};

	const handleRegisterSubmit = async (data: {
		username: string;
		email: string;
		password: string;
		confirmPassword: string;
	}) => {
		setLoading(true);
		try {
			await registerMockFetch(data);
			alert('Регистрация успешна');
		} catch (error) {
			throw new Error('Ошибка запроса');
		}
		setLoading(false);
	};

	return { handleLoginSubmit, handleRegisterSubmit, loading };
};
