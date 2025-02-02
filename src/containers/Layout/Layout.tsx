import React from 'react';
import clsx from 'clsx';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MenuItem } from '@/components/Menu/types';
import styles from './Layout.module.scss';

type LayoutProps = {
	headerMenuItems: MenuItem[];
	footerMenuItems: MenuItem[];
	className?: string;
	children?: React.ReactNode;
};

const Layout = ({
	headerMenuItems,
	footerMenuItems,
	className,
	children,
}: LayoutProps) => {
	return (
		<div className={clsx(styles.layout, className)}>
			<Header menuItems={headerMenuItems} />

			<main className={styles.main}>{children}</main>

			<Footer menuItems={footerMenuItems} />
		</div>
	);
};

export default Layout;
