interface Route {
  path: string;
  label: string;
}

export default () => {
  const routes: Route[] = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return { routes };
};
