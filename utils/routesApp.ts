interface RouteType {
  path: string;
  label: string;
}

export default () => {
  const routes: RouteType[] = [
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return { routes };
};
