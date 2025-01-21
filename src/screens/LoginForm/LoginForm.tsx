import React, { useState } from 'react';
import Form from '@/components/Form/Form';
import Field from '@/components/Field/Field';
import { InputEmail, InputPassword } from '@/components/Input/Input';
import { SubmitButton } from '@/components/Action/Action';
import { Text } from '@/components/Typography/Typography';

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
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

		const { email, password } = formData;

		if (!email || !password) {
			setError('Все поля должны быть заполнены');
			return;
		}

		try {
			alert('Вход выполнен');
		} catch {
			alert('Ошибка входа');
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
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
			{error && <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>}
			<SubmitButton>
				<Text value="demo.logIn" />
			</SubmitButton>
		</Form>
	);
};

export default LoginForm;
