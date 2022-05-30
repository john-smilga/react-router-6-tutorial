import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>Error</h2>
      <p>Page Not Found</p>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
};
export default Error;
