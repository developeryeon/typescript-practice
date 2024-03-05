import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function Router() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
}