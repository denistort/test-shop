import c from './Button.module.css';

export const Button = (props) => {

	return <button className={c.b} {...props}>{props.children}</button>
}