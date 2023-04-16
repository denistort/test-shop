import { ProductCard } from '../ProductCard/ProductCard';
import c from './ProductsList.module.css';

export const ProductsList = ({ products }) => {
	return (
		<section className={c.list}>
			{products.map((p) => (
				<ProductCard key={p.id} image={p.image} id={p.id} product={p} />
			))}
		</section>
	);
};
