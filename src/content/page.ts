export const categories: NavLink[] = [
	{
		name: 'Sneakers',
		link: '/sneakers',
		disabled: false,
		singularName: 'sneaker',
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
	},
	{
		name: 'Running Shoes',
		link: '/running-shoes',
		disabled: false,
		singularName: 'running-shoe',
	}
];

export const navLinks: NavLink[] = [
	{
		name: 'All',
		link: '/all-products',
		disabled: false,
		singularName: 'product',
	},
	...categories,
];