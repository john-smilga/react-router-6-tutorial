import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Link to='about' className="btn">
        About
      </Link>
    </section>
  );
};
export default Home;
