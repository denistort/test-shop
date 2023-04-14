import { create } from "zustand";
import products from '../static-data/products.json';
import brands from '../static-data/brands.json';

export const useProducStore = create((set) => ({
	products: products,
	sort: () => set((state) => state),
}));

export const useShoppingCartStore = create((set) => ({
	shoppingCart: [],
	addProduct: (product) =>
		set((state) => ({ shoppingCart: [...state.shoppingCart, product] })),
}));

export const useBrandsStore = create((set) => ({
	brands,
}))