export const categories: NavLink[] = [
	{
		name: 'Sneakers',
		link: '/sneakers',
		disabled: false,
		singularName: 'sneaker',
		placeholderImageURL: 'https://cdn.cosmicjs.com/63336280-40cd-11ef-bfb7-a598d323cbfc-nike-sb-dunktextured-green.jpg',
	},
	{
		name: 'Jerseys',
		link: '/jerseys',
		disabled: true,
		singularName: 'jersey',
	},
	{
		name: 'Football Boots',
		link: '/football-boots',
		disabled: false,
		singularName: 'football-boot',
		placeholderImageURL: 'https://cdn.cosmicjs.com/27b85c70-4144-11ef-bfb7-a598d323cbfc-adidas-predator-blue.jpg',
	},
	{
		name: 'Keychain',
		link: '/keychain',
		disabled: true,
		singularName: 'keychain',
	},
	{
		name: 'Football Scarfs',
		link: '/football-scarfs',
		disabled: true,
		singularName: 'football-scarf',
	},
	{
		name: 'Watches',
		link: '/watches',
		disabled: false,
		singularName: 'watch',
		placeholderImageURL: 'https://cdn.cosmicjs.com/586f52f0-4212-11ef-bfb7-a598d323cbfc-rolex-pre-titanic.jpg',
	},
	{
		name: 'Running Shoes',
		link: '/running-shoes',
		disabled: false,
		singularName: 'running-shoe',
		placeholderImageURL: 'https://cdn.cosmicjs.com/f07c43a0-407d-11ef-bfb7-a598d323cbfc-nike-premium-baskeball-shoeskobe-version.jpg',
	}
];

export const navLinks: NavLink[] = [
	{
		name: 'All',
		link: '/all-products',
		disabled: false,
		singularName: 'product',
		placeholderImageURL: 'https://cdn.cosmicjs.com/8a0d3f00-3cf6-11ef-bfb7-a598d323cbfc-WhatsApp-Image-2024-07-04-at-21.38.50.jpeg',
	},
	...categories,
];