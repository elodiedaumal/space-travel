import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Crew from './Pages/Crew';
import Destnation from './Pages/Destnation';
import Home from './Pages/Home';
import Technology from './Pages/Technology';
import SharedLayout from './Components/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destnation />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
