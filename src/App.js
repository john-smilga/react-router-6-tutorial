import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import React from 'react';


function App() {
  return (
    //BrowserRouter to connect to the Browser
    <BrowserRouter>
      {/* First approach for navbar */}
      {/* If we want any element (for example like navbar) to always display no matter what, we can put that element outside of Routes but inside Browser Router */}
      {/* Second approach for Navbar - We can use nested routes and <Outlet /> Component */}
      {/* Each Route must contain in the Routes  */}
      <Routes>
        {/* Each Route will render the element depend on the path (Url) */}
        {/* If we use nested Route the the child route will be access follow the parent route (for example: home/about) */}

        <Route path='/' element={<Home />} >
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          {/* What if user type in some link not match our wanted path ? we use as below to handle*/}
          {/* We should set up an Error page and use path to * to display that error page */}
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
