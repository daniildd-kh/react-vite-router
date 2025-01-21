import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import Menu from '@/components/Menu/Menu';
import Logo from '@/components/Logo/Logo';
import { MenuItem } from '@/components/Menu/types';

type HeaderProps = {
	menuItems: MenuItem[];
	className?: string;
	children?: React.ReactNode;
};

const Header = ({ menuItems, className, children }: HeaderProps) => {
	return (
		<header className={clsx(styles.header, className)}>
			<Logo />
			<Menu items={menuItems} className={styles.menu} />
			{children && <div>{children}</div>}
		</header>
	);
};

export default Header;
