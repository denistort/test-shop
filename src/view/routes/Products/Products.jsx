import { ProductsList } from '../../shared-components/ProductsList/ProductsList';
import { SideBar } from '../../shared-components/SideBar/SideBar';
import { Container } from '../../shared-components/ui';
import { useProducStore } from '../../../store/store';

const Products = () => {
	const { products, isLoading } = useProducStore();

	return (
		<>
			<Container>
				<SideBar></SideBar>
				{ products ? <ProductsList products={products}></ProductsList>: 'loading...'}
			</Container>
		</>
	);
};

export default Products;
