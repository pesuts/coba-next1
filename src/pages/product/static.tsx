import ProductView from "@/views/Product";
import { ProductsProps } from "@/types/product.type";

const ProductPage = ({ products }: ProductsProps) => {
  // const { products } = props;
  // console.log(products);
  return (
    <div>
      <ProductView products={products} />
      {/* <ProductView products={[]} /> */}
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  // Fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
      // products: [] // Testing Build,
    },
    // revalidate: 60 // seconds,
  };
}
