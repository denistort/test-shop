import products from '../static-data/products.json';

class Api {

	getProducts() {
		return new Promise((res, rej) => {
			setTimeout(() => {
				res(products);
			}, 2000)
		})
	}
}
export const api = new Api();