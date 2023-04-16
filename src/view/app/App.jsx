import { useProducStore } from '../../store/store';
import { router } from '../router/router';
import { RouterProvider } from 'react-router-dom';

import c from './App.module.css';
import { useEffect } from 'react';

const App = () => {
	const { fetchProducts } = useProducStore();
	
	useEffect(() => {
		fetchProducts()
	}, [])
	return (
		<div className={c.App}>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
};

export default App;
