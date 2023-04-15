import { useProducStore } from '../../../store/store';
import { ProductCard } from '../ProductCard/ProductCard';
import c from './ProductsList.module.css';

export const ProductsList = () => {
	const products = useProducStore((state) => state.products);

	return (
		<section className={c.list}>
			{products.map((p) => (
				<ProductCard key={p.id} image={p.image} id={p.id} product={p} />
			))}
		</section>
	);
};
