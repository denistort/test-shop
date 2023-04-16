import { useEffect, useRef, useState } from 'react';
import c from './Select.module.css';

export const Select = ({ onChange, variants }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(variants.at(0).title);
	const [width, setWidth] = useState(0);
	// document.querySelector('.dwewe)
	const ref = useRef();

	useEffect(() => {
		if (width > 0) {
			return;
		} else {
			setWidth(ref.current.getBoundingClientRect().width);
		}
	}, [isOpen]);
	return (
		<div className={c.wrapper}>
			<div
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				ref={ref}
				className={c.selected}
				tabIndex={0}
			>
				{selected}
			</div>
			{isOpen && (
				<div style={{ width }} className={c.list}>
					{variants.map((v) => (
						<div
							onClick={() => {
								onChange(v);
								setSelected(v.title);
								setIsOpen(false);
							}}
							className={c.item}
							key={v.id}
						>
							{v.title}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
