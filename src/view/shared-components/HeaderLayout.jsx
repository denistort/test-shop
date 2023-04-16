import { Header } from "./Header/Header";

export const HeaderLayout = ({ children }) => {
	return (
		<>
			<Header></Header>
			{children}
		</>
	)
}