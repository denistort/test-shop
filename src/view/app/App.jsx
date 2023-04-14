import { useProducStore } from '../../store/store';
import { router } from '../router/router';
import { RouterProvider } from 'react-router-dom';

import c from './App.module.css';

const App = () => {
	const products = useProducStore((state) => state.products);
	console.log(products);

	return (
		<div className={c.App}>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
};

export default App;
