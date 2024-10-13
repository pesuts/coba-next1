import { fetcher } from "@/libs/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

import Custom404 from "../404";
import DetailProductView from "@/views/DetailProduct";
import { ProductProps, ProductType } from "@/types/product.type";

//**** CLIENT SIDE RENDERING
// const DetailProductPage = () => {

//   const { query } = useRouter();
//   const productId = query.product;

//   const { data, error, isLoading } = useSWR(
//     `/api/product/${productId}`,
//     fetcher
//   );
//   const product = data?.data ?? null;

//   return (
//     <div>
//       {!isLoading && product === null ? (
//         <Custom404 message="Product Not Found" />
//       ) : (
//         <DetailProductView product={product} />
//       )}
//     </div>
//   );
// };

// export default DetailProductPage;

//**** SERVER SIDE RENDERING
// const DetailProductPage = ({ product }: ProductProps) => {
//   return (
//     <div>
//       {/* <DetailProductView product={product} /> */}
//        {(product && (Object.keys(product).length > 0)) ? (
//          <DetailProductView product={product} />
//         ) : (
//          <Custom404 message="Product Not Found" />
//        )}
//     </div>
//   );
// };

// export default DetailProductPage;

// export async function getServerSideProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   const productId = params.product;

//   const response = await fetch(
//     `http://localhost:3000/api/product/${productId}`
//   );
//   const JSONresponse = await response.json();
//   const product = JSONresponse.data;

//   return {
//     props: {
//       product: product ?? {},
//     },
//   };
// }


//**** STATIC RENDERING DYNAMIC ROUTES
const DetailProductPage = ({ product }: ProductProps) => {
  return (
    <div>
      <DetailProductView product={product} />
    </div>
  );
};

export default DetailProductPage;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/product`);
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { product: string };
}) {
  const productId = params.product;
  const response = await fetch(
    `http://localhost:3000/api/product/${productId}`
  );
  const JSONresponse = await response.json();
  const product = JSONresponse.data;
  return {
    props: {
      product,
    },
  };
}