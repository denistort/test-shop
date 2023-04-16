import { useState } from 'react';
import { useBrandsStore, useProducStore } from '../../../store/store';
import { Button } from '../ui/Button/Button';
import { CheckBox } from '../ui/Checkbox/Checkbox';
import brands from '../../../static-data/brands.json';
import { Select } from '../ui/Select/Select';
import c from './SideBar.module.css';

const initialBrandsFilterState = brands.reduce((acc, brand) => {
	acc[brand.id] = true;
	return acc;
}, {});
const sortTypes = [
	{ id: 1, title: 'сначала дорогие' },
	{ id: 2, title: 'сначала дешевые' },
];
export const SideBar = () => {
	// Stores
	const brands = useBrandsStore((state) => state.brands);
	const sort = useProducStore((state) => state.sort);
	// 
	const [moreBrands, setMoreBrands] = useState(false);
	const [brandsFilter, setBrandsFilter] = useState(initialBrandsFilterState);
	const [sortByPrice, setSortByPrice] = useState(1);
	//
	console.log(brands);
	return (
		<aside className={c.sidebar}>
			<h3 className={c.h}>Брэнды</h3>
			<div className={`${c.boxes_wrapper} ${moreBrands ? c.more : ''}`}>
				{brands.map(({ id, title }) => (
					<CheckBox
						onChange={(value) => {
							setBrandsFilter({ ...brandsFilter, [id]: value });
						}}
						checked={brandsFilter[id]}
						key={id}
						title={title}
					></CheckBox>
				))}
			</div>
			<div
				onKeyUp={(e) => {
					if (e.key === 'Enter') {
						setMoreBrands(!moreBrands);
					}
				}}
				tabIndex={0}
				className={c.show_more_text}
				onClick={() => setMoreBrands(!moreBrands)}
			>
				Show more
			</div>
			<h3 className={c.h}>По цене</h3>
			<Select
				variants={sortTypes}
				onChange={(val) => setSortByPrice(val.id)}
			></Select>
			<Button
				onClick={() => {
					console.log(brandsFilter);
					sort({ brandsFilter, sortByPrice });
				}}
			>
				Применить
			</Button>
		</aside>
	);
};
