import { useProducStore } from '../../../store/store';
import c from './ProductsList.module.css';

export const ProductsList = () => {
	const products = useProducStore((state) => state.products);

	return (
		<section className={c.list}>
			{products.map((p) => (
				<div style={{ backgroundImage: `url(${p.image})`, objectFit: 'cover', maxWidth: '100%'}} className={c.item}></div>
			))}
		</section>
	);
};
