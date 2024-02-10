interface RouteType {
  path: string;
  label: string;
}

export default () => {
  const routes: RouteType[] = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return { routes };
};
