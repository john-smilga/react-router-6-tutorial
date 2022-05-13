import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  // use useParams() in order to get access to the params in the url, which in this case is the product id
  // The object key "productId" need to match with the :productId which we set in the Route path
  const { productId } = useParams();

  //Base on the productId we got from the url, use that id to find the related product in data
  const product = products.find(product => productId === product.id);
  //extract the image and name property of the product object
  const { name, image } = product;

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products' className="btn"> Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
