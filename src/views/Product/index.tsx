import { ProductsProps, ProductType } from "@/types/product.type";
import styles from "./Product.module.scss";

const ProductView = ({ products }: ProductsProps) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product</h1>
      <div className={styles.product__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <div key={product.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  <img src={product.image} alt={product.image} width={350} />
                </div>
                <h4 className={styles.product__content__item__name}>
                  {product.name}
                </h4>
                <h4 className={styles.product__content__item__category}>
                  {product.category}
                </h4>
                <h4 className={styles.product__content__item__price}>
                  {product.price.toLocaleString("id", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </h4>
              </div>
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
