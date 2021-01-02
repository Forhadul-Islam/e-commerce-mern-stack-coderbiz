import React from 'react';
import { Switch } from "react-router-dom";
import Customers from './customers/Customers';
import Dashboard from './dashboard/Dashboard';
import NewProduct from './newProduct/NewProduct';
import ProductManagement from './productManagement/ProductManagement';
import ProtectedAdminRoute from './ProtectedAdminRoute';



const routes = [
    {
        path: "/admin",
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: "/admin/dashboard",
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: "/admin/customers",
        main: () => <Customers />
    },
    {
        path: "/admin/create-new-product",
        main: () => <NewProduct />
    },
    {
        path: "/admin/products",
        main: () => <ProductManagement />
    }
  ];

const AdminContainer = () => {
    return (
        <div>
            <Switch>
                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <ProtectedAdminRoute
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                ))}
            </Switch>
        </div>
    )
}

export default AdminContainer
