import { useState } from 'react';
import c from './Checkbox.module.css';

export const CheckBox = (props) => {
	const [checked, setChecked] = useState(false);
	const onClickHandler = () => {
		setChecked(!checked);
	};

	const onKeyUpHandler = (e) => {
		if (e.key === 'Enter') {
			setChecked(!checked);
		}
	};
	return (
		<div onKeyUp={onKeyUpHandler} onClick={onClickHandler} className={c.wrapper} tabIndex={0}>
			<div className={c.box}>
				{checked && (
					<svg
						width="15"
						height="15"
						viewBox="0 0 10 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 4L4 7L9 1" stroke="#2fb3ce" />
					</svg>
				)}
			</div>
			<div>{props.title}</div>
		</div>
	);
};
