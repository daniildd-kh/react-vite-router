import clsx from 'clsx';
import { ChangeEvent, useEffect, useState } from 'react';
import styles from './Field.module.scss';

type FieldProps = {
	className?: string;
	text?: string;
	value?: string;
	type?: string;
	name?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	inputComponent?: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Field = ({
	className,
	text,
	name,
	value,
	type,
	onChange,
	placeholder,
	inputComponent,
  ...props
}: FieldProps) => {
	const [valueInput, setValueInput] = useState(value);

	useEffect(() => {
		setValueInput(value || '');
	}, [value]);

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValueInput(e.target.value);
		onChange?.(e);
	};

	const Input = inputComponent || 'input';

	return (
		<label className={clsx(styles.label, className)}>
			<span className={styles.span}>{text}</span>
			<Input
				className={styles.input}
				type={type}
				name={name}
				onChange={onInputChange}
				value={valueInput}
				placeholder={placeholder}
        {...props}
			/>
		</label>
	);
};

export default Field;
