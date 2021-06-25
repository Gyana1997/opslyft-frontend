import pages from './pages';

const {
    Dashboard,
    Login
} = pages;

export const groups = [
    {
    	group: 'dashboard',
		isPublic: true,
		routes: [
			{
				title: 'Dashboard',
				path: '/dashboard',
				icon: 'Dashboard',
                component: Dashboard,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    },
    {
    	group: 'Login',
		isPublic: true,
		routes: [
			{
				title: 'Login',
				path: '/login',
				icon: 'Login',
                component: Login,
                isExact: true,
                subRoutes: [],
				isPublic: true,
				visible: true,
				index: 1
            }
		]
    }
];

const joinFn = (acc = [], curr) => {
	return acc.concat(curr);
};

export const allRoutes = groups
	.map(function merge(group) {
		const { routes } = group;
		const subRoutes = routes.map(route => route.subRoutes).reduce(joinFn);
		return routes.concat(subRoutes);
	})
	.reduce(joinFn);

export const getGroups = () => groups;

export default {
	groups,
	allRoutes
};