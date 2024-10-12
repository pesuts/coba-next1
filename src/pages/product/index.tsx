import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductData = {
  id: number;
  name: string;
  price: number;
  size: string;
};

type Response = {
  data: ProductData[];
  status: string
};

const ProductPage = () => { 
  const [isLogin] = useState(true);
  const [products, setProducts] = useState<ProductData[]>([]);
  const { push } = useRouter();
  
  useEffect(() => { 
    if (!isLogin) { 
      push("/auth/login");
    }
  }, []);
  
  useEffect(() => { 
    fetch("/api/product").then((res) => res.json()).then((response: Response) => { 
      // console.log(response);
      setProducts(response.data);
    })
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: ProductData) => { 
        return (<div key={product.id}>{product.name}</div>)
      })}
    </div>
  );
}

export default ProductPage;