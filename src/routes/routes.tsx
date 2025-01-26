import LoginPage from '@/pages/LoginPage/LoginPage';
import main from '@/pages/MainPage/MainPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';

export const routes = [
	{ index: true, ...main },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/register', element: <RegisterPage /> },
];
