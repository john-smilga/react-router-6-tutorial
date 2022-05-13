import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  // use useParams() in order to get access to the params in the url, which in this case is the product id
  // The object key "productId" need to match with the :productId which we set in the Route path
  const { productId } = useParams();
  return (
    <section className='section product'>
      <h2>{productId}</h2>
      <Link to='/products' className="btn"> Back to Products Page</Link>
    </section>
  );
};

export default SingleProduct;
