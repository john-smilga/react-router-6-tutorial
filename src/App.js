import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import React from 'react';
import { useState } from 'react';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedProductsLayout from './pages/SharedProductsLayout';


function App() {
  // later be used to login
  const [user, setUser] = useState(null);

  return (
    //BrowserRouter to connect to the Browser
    <BrowserRouter>
      {/* First approach for navbar */}
      {/* If we want any element (for example like navbar) to always display no matter what, we can put that element outside of Routes but inside Browser Router */}
      {/* Second approach for Navbar - We can use nested routes and <Outlet /> Component */}
      {/* Each Route must contain in the Routes  */}
      <Routes>
        {/* Each Route will render the element depend on the path (Url) */}
        {/* If we use nested Route the the child route will be access follow the parent route (for example: /about) */}
        {/* The shared layout will always render if the user access the correct url and its child component */}
        {/* If we go to / the Home will be rendered because of index route */}
        {/* The SharedLayout needs to have <Outlet /> (check SharedLayout.js) in order for its to render its child component */}
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          {/* Products */}

          <Route path='products' element={<SharedProductsLayout />}>
            <Route index element={<Products />} />
            {/* We can also use nested routes here for /products to render base on products id child, but for now we do like this and in the SingleProduct we will useParams to display which product we want */}
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          {/* Login */}
          <Route path='login' element={<Login setUser={setUser} />} />

          {/* Dashboard (after login) */}
          {/* Protected Route to protect Dashboard from being connected directly without the login process */}
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }>
          </Route>

          {/* What if user type in some link not match our wanted path ? we use as below to handle*/}
          {/* We should set up an Error page and use path to * to display that error page */}
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
