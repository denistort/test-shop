import { createBrowserRouter } from 'react-router-dom';
import Products from '../routes/Products/Products';
import ShoppingCart from '../routes/ShoppingCart/ShoppingCart';
import ProductDetail from '../routes/ProductDetail/ProductDetail';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Products />,
	},
	{
		path: '/shopping-cart',
		element: <ShoppingCart />,
	},
	{
		path: '/product/:id',
		element: <ProductDetail />,
	},
]);
