import clsx from 'clsx';
import { TypographyVariant } from './types';
import { useTranslation } from 'react-i18next';
import styles from './Typography.module.scss';
import { ReactNode } from 'react';

type TypographyProps = {
	variant?: TypographyVariant;
	value?: string;
	className?: string;
  children?: ReactNode;
};

const translationKeys = [
	'demo.welcomeUser',
	'demo.logIn',
	'demo.logOut',
	'demo.signUp',
] as const;

type TranslationKey = (typeof translationKeys)[number];

function withTypography(defaults: TypographyProps) {
	return function Typography({
		variant = defaults.variant || TypographyVariant.Text,
		className,
		value,
    children,
		...props
	}: TypographyProps) {
		const { t } = useTranslation();
		const text =
			value &&
			(translationKeys.includes(value as TranslationKey)
				? t(value as TranslationKey)
				: value);

		return (
			<span
				className={clsx(styles[variant], className, styles.typography)}
				{...props}
			>
				{text || children}
			</span>
		);
	};
}

export const Title = withTypography({ variant: TypographyVariant.Title });
export const Text = withTypography({ variant: TypographyVariant.Text });
export const SmallText = withTypography({
	variant: TypographyVariant.SmallText,
});
