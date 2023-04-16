import { useShoppingCartStore } from '../../../store/store';
import { ProductsList } from '../../shared-components/ProductsList/ProductsList';
import { Container } from '../../shared-components/ui';

const ShoppingCart = () => {
	const shoppingCart = useShoppingCartStore((state) => state.shoppingCart);

	return (
		<>
			<Container>
				<ProductsList products={shoppingCart}></ProductsList>
			</Container>
		</>
	);
};

export default ShoppingCart;
