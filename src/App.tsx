import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import Layout from './containers/Layout/Layout';

const headerMenuStub = [
	{ id: 1, label: 'О проекте', href: '/' },
	{ id: 2, label: 'Задачи', href: '/' },
	{ id: 3, label: 'Справочная', href: '/' },
];

const footerMenuStub = [
	{ id: 1, label: 'Новости', href: '/' },
	{ id: 2, label: 'Команда', href: '/' },
	{ id: 3, label: 'Документы', href: '/' },
	{ id: 4, label: 'Контакты', href: '/' },
];

function LayoutWrapper() {
	return (
		<Layout headerMenuItems={headerMenuStub} footerMenuItems={footerMenuStub}>
			<Outlet />
		</Layout>
	);
}

const router = createBrowserRouter([
	{
		element: <LayoutWrapper />,
		children: publicRoutes,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
