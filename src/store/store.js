import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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

export const useShoppingCartStore = create(
	persist(
		(set, get) => ({
			// data
			shoppingCart: [],
			// method
			addProduct: (product) => set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
			removeProduct: (id) =>
				set({ shoppingCart: get().shoppingCart.filter((p) => p.id !== id) }),
		}),
		{
			name: 'shopping-cart',
			storage: createJSONStorage(() => localStorage)
		}
	)
);

export const useBrandsStore = create((set) => ({
	brands,
}));
