// Pages
import * as pages from "../pages";
// Layouts
import { DefaultLayout } from "../layouts";
// routes config
import * as config from "../config";

const publicRoutes = [{ path: config.routes.home, component: pages.Home, layout: DefaultLayout }];

export { publicRoutes };
