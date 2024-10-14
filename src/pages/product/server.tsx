import ProductView from "@/views/Product";
import { ProductsProps } from "@/types/product.type";

const ProductPage = (props: ProductsProps) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
      {/* <ProductView products={[]} /> */}
    </div>
  );
};

export default ProductPage;

// Dipanggil setiap melakukan request
export async function getServerSideProps() {
  // Fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
