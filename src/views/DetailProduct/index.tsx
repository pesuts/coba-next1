import styles from "./DetailProduct.module.scss";
import { ProductProps } from "@/types/product.type";

const DetailProductView = ({ product }: ProductProps) => {
  return (
    product && (
      <div>
        <h1 className={styles.title}>
          Detail Product Page
        </h1>
        <div className={styles.productDetail}>
          <div className={styles.productDetail__image}>
            <img src={product.image} alt={product.image} width={350} />
          </div>
          <h4 className={styles.productDetail__name}>{product.name}</h4>
          <h4 className={styles.productDetail__category}>{product.category}</h4>
          <h4 className={styles.productDetail__price}>
            {product.price && product.price.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })}
          </h4>
        </div>
      </div>
    )
  );
};

export default DetailProductView;
