import { ReactNode } from 'react';
import styles from './Form.module.scss';
import clsx from 'clsx';
import React from 'react';
import {useFormContext } from './FormContext';

type FormProps = {
	children: ReactNode;
	onSubmit?: React.FormEventHandler;
	className?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

const Form = ({ onSubmit, className, children, ...props }: FormProps) => {
	const FormComponent = useFormContext();
	return (
		<FormComponent className={clsx(className, styles.form)} onSubmit={onSubmit} {...props}>
			{children}
		</FormComponent>
	);
};

export default Form;
