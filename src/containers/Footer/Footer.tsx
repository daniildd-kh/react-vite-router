import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.scss';
import Logo from '@/components/Logo/Logo';
import Menu from '@/components/Menu/Menu';
import { MenuItem } from '@/components/Menu/types';

type FooterProps = {
	menuItems: MenuItem[];
	className?: string;
};

const Footer = ({ menuItems, className }: FooterProps) => {
	return (
		<footer className={clsx(styles.footer, className)}>
			<Logo />
			<Menu items={menuItems} />
		</footer>
	);
};

export default Footer;
