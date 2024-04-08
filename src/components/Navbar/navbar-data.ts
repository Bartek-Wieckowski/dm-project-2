export const footerRoutes = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms' },
  { path: '/about', label: 'About' },
];

export const routes = [
  { path: '/', label: 'Homepage' },
  { path: '/auth/sign-up', label: 'Register' },
  { path: '/auth/sign-in', label: 'Login' },
  { path: '/hotels', label: 'Hotels List' },
  { path: '/profile', label: 'Profile' },
  { path: '/map', label: 'Maps' },
  { path: '/blog', label: 'Blog' },
  { path: '/travelers', label: 'Travelers' },
  { path: '/admin', label: 'Admin Panel' },
 ...footerRoutes,
];

export default routes;
