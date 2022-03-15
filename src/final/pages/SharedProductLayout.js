import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
};
export default Home;
