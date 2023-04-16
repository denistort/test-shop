import { Header } from "./Header/Header";

export const withHeader = (Component) => () => (
	<>
		<Header></Header>
		<Component></Component>
	</>
)