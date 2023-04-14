import { Header } from '../../shared-components/Header/Header';
import { ProductsList } from '../../shared-components/ProductsList/ProductsList';
import { SideBar } from '../../shared-components/SideBar/SideBar';
import { Container } from '../../shared-components/ui';

const Products = () => {
	return (
		<>
			<Header></Header>
			<Container>
				<SideBar></SideBar>
				<ProductsList></ProductsList>
			</Container>
		</>
	);
};

export default Products;
