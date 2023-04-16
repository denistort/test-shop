import { create } from 'zustand';
import products from '../static-data/products.json';
import brands from '../static-data/brands.json';
import { api } from '../api/api';

export const useProducStore = create((set) => ({
	products: null,
	isLoading: false,
	sort: ({ brandsFilter, sortByPrice }) =>
		set((state) => ({
			...state,
			products: products
				.filter((product) => brandsFilter[product.brand])
				.sort((a, b) =>
					sortByPrice === 2
						? a.regular_price.value - b.regular_price.value
						: b.regular_price.value - a.regular_price.value
				),
		})),
	resetSort: () => set({ products }),
	fetchProducts: async () => {
		set((state) => ({ ...state, isLoading: true }));
		const products = await api.getProducts();
		set((state) => ({ ...state, products }));
		set((state) => ({ ...state, isLoading: false }));
	},
}));

export const useShoppingCartStore = create((set) => ({
	// data
	shoppingCart: [],
	// method
	addProduct: (product) => set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
	removeProduct: (id) =>
		set((state) => ({ shoppingCart: state.shoppingCart.filter((p) => p.id !== id) })),
}));

export const useBrandsStore = create((set) => ({
	brands,
}));
