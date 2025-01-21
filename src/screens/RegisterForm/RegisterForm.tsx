import React, { useState } from 'react';
import Form from '@/components/Form/Form';
import Field from '@/components/Field/Field';
import { Input, InputEmail, InputPassword } from '@/components/Input/Input';
import { SubmitButton } from '@/components/Action/Action';
import { Text } from '@/components/Typography/Typography';
import { registerMockFetch } from '@/api/utils';

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setError('');
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const { username, email, password, confirmPassword } = formData;

		if (!username || !email || !password || !confirmPassword) {
			setError('Все поля должны быть заполнены');
			return;
		}

		if (password !== confirmPassword) {
			setError('Пароли не совпадают');
			return;
		}

		try {
			await registerMockFetch(formData);
			alert('Регистрация успешна');
			setFormData({
				username: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch {
			alert('Ошибка регистрации');
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Field
				text="Имя"
				value={formData.username}
				onChange={handleChange}
				name="username"
				inputComponent={Input}
			/>
			<Field
				text="Email"
				value={formData.email}
				onChange={handleChange}
				name="email"
				inputComponent={InputEmail}
			/>
			<Field
				text="Пароль"
				value={formData.password}
				onChange={handleChange}
				name="password"
				inputComponent={InputPassword}
			/>
			<Field
				text="Повторите пароль"
				value={formData.confirmPassword}
				onChange={handleChange}
				name="confirmPassword"
				inputComponent={InputPassword}
			/>
			{error && <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>}
			<SubmitButton>
				<Text value="demo.signUp" />
			</SubmitButton>
		</Form>
	);
};

export default RegisterForm;
