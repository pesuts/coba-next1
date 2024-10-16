import { ProductsProps, ProductType } from "@/types/product.type";
import styles from "./Product.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProductView = ({ products }: ProductsProps) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Products</h1>
      <div className={styles.product__content}>
        {products && products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link href={`/product/${product.id}`} key={product.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  {/* <img src={product.image} alt={product.image} width={350} /> */}
                  <Image src={product.image} alt={product.image} width={350} height={350}/>
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <h4 className={styles.product__content__item__category}>
                  {product.category}
                </h4>
                <h4 className={styles.product__content__item__price}>
                  {product.price && product.price.toLocaleString("id", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </h4>
              </Link>
            ))}
          </>
        ) : (
          <>
            {
              <div className={styles.product__content__skeleton}>
                <div className={styles.product__content__skeleton__image}></div>
                <h4 className={styles.product__content__skeleton__name}></h4>
                <h4
                  className={styles.product__content__skeleton__category}
                ></h4>
                <h4 className={styles.product__content__skeleton__price}></h4>
              </div>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default ProductView;
