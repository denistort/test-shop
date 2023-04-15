import { useProducStore } from '../../../store/store';
import c from './ProductsList.module.css';

export const ProductsList = () => {
	const products = useProducStore((state) => state.products);

	return (
		<section className={c.list}>
			{products.map((p) => (
				<div
					key={p.id}
					style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${p.image})` }}
					className={c.item}
				></div>
			))}
		</section>
	);
};
