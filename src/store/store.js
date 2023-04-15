import { create } from 'zustand';
import products from '../static-data/products.json';
import brands from '../static-data/brands.json';

export const useProducStore = create((set) => ({
	products: products,
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
}));

export const useShoppingCartStore = create((set) => ({
	shoppingCart: [],
	addProduct: (product) => set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
}));

export const useBrandsStore = create((set) => ({
	brands,
}));
