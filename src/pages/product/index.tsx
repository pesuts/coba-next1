import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import useSWR from "swr";
// import { ProductType } from "../../types/product.type";

// type Response = {
//   data: ProductType[];
//   status: string;
// };

const ProductPage = () => {
  // const [isLogin] = useState(true);
  // const [products, setProducts] = useState<ProductType[]>([]);
  // const { push } = useRouter();

  // useEffect(() => {
  //   if (!isLogin) {
  // push("/auth/login");
  //   }
  // }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response: Response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      {/* <h1>Product Page</h1>
      {products.map((product: ProductType) => { 
        return (<div key={product.id}>{product.name}</div>)
      })} */}
      <ProductView products={isLoading ? [] : data?.data} />
      {/* <ProductView products={products} /> */}
    </div>
  );
};

export default ProductPage;
