import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from './Sidebar';
import { useGlobalContext } from '../context';

const Home = () => {
  const { sidebar } = useGlobalContext();
  return (
    <>
      <Navbar />
      {sidebar ? <Sidebar /> : ''}
      <Outlet />
    </>
  );
};
export default Home;
