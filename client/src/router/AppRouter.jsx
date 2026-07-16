import { Routes, Route } from "react-router-dom";

import routes from "../config/routesConfig";

function AppRouter() {

    return (

        <Routes>

            {routes.map((route) => {

                const Component = route.component;

                const Layout = route.layout;

                return (

                    <Route

                        key={route.id}

                        path={route.path}

                        element={

                            <Layout>

                                <Component />

                            </Layout>

                        }

                    />

                );

            })}

        </Routes>

    );

}

export default AppRouter;