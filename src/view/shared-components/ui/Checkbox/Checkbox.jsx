import c from './Checkbox.module.css';

export const CheckBox = ({ title, onChange, checked }) => {
	const onClickHandler = () => {
		onChange(!checked);
	};

	const onKeyUpHandler = (e) => {
		if (e.key === 'Enter') {
			onChange(!checked);
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
			<div>{title}</div>
		</div>
	);
};
