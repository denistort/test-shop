import c from "./Container.module.css";

export const Container = ({ children }) => (
	<div className={c.container}>{children}</div>
);
