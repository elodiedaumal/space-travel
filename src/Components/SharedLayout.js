import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};
export default Home;
