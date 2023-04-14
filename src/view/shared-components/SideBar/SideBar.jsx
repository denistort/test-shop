import { useState } from 'react';
import { useBrandsStore } from '../../../store/store';
import { Button } from '../ui/Button/Button';
import { CheckBox } from '../ui/Checkbox/Checkbox';
import c from './SideBar.module.css';

export const SideBar = () => {
	const brands = useBrandsStore((state) => state.brands);
	const [moreBrands, setMoreBrands] = useState(false);

	console.log(brands);
	return (
		<aside className={c.sidebar}>
			<h3 className={c.h}>Брэнды</h3>
			<div className={`${c.boxes_wrapper} ${moreBrands ? c.more : ''}`}>
				{brands.map(({ id, title }) => (
					<CheckBox key={id} title={title}></CheckBox>
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
			<Button>Применить</Button>
		</aside>
	);
};
