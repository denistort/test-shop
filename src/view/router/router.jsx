import { createBrowserRouter } from 'react-router-dom';
import { Products, ShoppingCart, ProductDetail } from '../routes';
import { HeaderLayout } from '../shared-components/HeaderLayout';
import { withHeader } from '../shared-components/withHeader';

const ShoppingCartWithHeader = withHeader(ShoppingCart);

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<HeaderLayout>
				<Products />,
			</HeaderLayout>
		),
	},
	{
		path: '/shoppingCart',
		element: <ShoppingCartWithHeader />,
	},
	{
		path: '/product/:id',
		element: <ProductDetail />,
	},
]);
