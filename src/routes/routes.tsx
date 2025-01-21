import LoginPage from '@/pages/LoginPage/LoginPage';
import MainPage from '@/pages/MainPage/MainPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';

export const routes = [
	{ index: true, element: <MainPage /> },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/register', element: <RegisterPage /> },
];
