import { RouteType } from "~/types/RouteType";

export default () => {
  const routes: RouteType[] = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return { routes };
};
